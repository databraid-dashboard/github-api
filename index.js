const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const root = require('./src/resolvers/RootResolver');
const schema = require('./src/schema/schema');
const GitHubStrategy = require('passport-github2').Strategy;
const passport = require('passport');
const partials = require('express-partials');
// const util = require('util');
const session = require('express-session');
const methodOverride = require('method-override');

const app = express();
app.use(partials());
app.use(methodOverride());

const PORT = process.env.PORT || 8000;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowCrossDomain);

app.use(session({
  secret: 'keyboard cat',
  keys: [process.env.SESSION_KEY1, process.env.SESSION_KEY2],
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());


// passport.use(new GitHubStrategy({
//     clientID: GITHUB_CLIENT_ID,
//     clientSecret: GITHUB_CLIENT_SECRET,
//     callbackURL: "http://localhost:8000/auth/github/callback"
//   },
//   (accessToken, refreshToken, profile, done) => {
//     console.log('here in strategy');
//     // asynchronous verification, for effect...
//
//       // To keep the example simple, the user's GitHub profile is returned to
//       // represent the logged-in user.  In a typical application, you would want
//       // to associate the GitHub account with a user record in your database,
//       // and return that user instead.
//       done(null, profile);
//   }));


passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:8000/auth/github/callback',
},
  ((accessToken, refreshToken, profile, done) => {
  // asynchronous verification, for effect...
  console.log(process.env.TKN);
  console.log(accessToken, 'accessToken');
  console.log(refreshToken, 'refreshToken');
  process.env.TKN = accessToken;
  console.log(process.env.TKN);
    process.nextTick(() =>

      // To keep the example simple, the user's GitHub profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the GitHub account with a user record in your database,
      // and return that user instead.
      done(null, profile),
    );
  }),
));
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
// NOTE prev code \/

app.use((req, res, next) => {
  res.locals.user = req.user;
  // console.log(res.locals.users, 'res.locals.user');
  // console.log(req.user, 'req.user');
  // console.log(res.session);
  next();
});


// NOTE prev code /\

// NOTES WITH daniel  -- need session keys generated
// CORS headers ALLOWCross Domain
//
// app.set('views', __dirname + '/views');
// app.set('view engine', 'html');
//


// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
//
// passport.authenticate('github', { scope: [ 'user:email', 'read:org', 'notifications' ] }),

app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email', 'read:org', 'notifications', 'repo'] }));

app.get('/auth/github/callback',
  passport.authenticate('github'),
  (req, res) => {
    return res.json(req.session.passport);
  });

  app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }));

// NOTE logout triggers end of session pass new session info to DB
app.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json(JSON.stringify('logout'));
});


// NOTE previous code
app.use((req, res) => {
  res.sendStatus(404);
});


if (!module.parent) {
  app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log(`Express server listening on port ${PORT}`);
  });
}
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}
