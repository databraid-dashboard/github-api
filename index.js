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

const PORT = process.env.PORT || 8000;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

const allowCrossDomain = (req, res, next) => {
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
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:8000/auth/github/callback',
},
  ((accessToken, refreshToken, profile, done) => {
    console.log(accessToken, 'round 1');
    console.log(process.env.TKN, "TKN 1");
    process.env.TKN = accessToken;
    console.log(accessToken, 'round 2');
    console.log(process.env.TKN, "TKN 2");
    process.nextTick(() =>
      done(null, profile),
    );
  }),
));

app.use((req, res, next) => {
  console.log('header', req.headers)
  next()
})

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email', 'read:org', 'notifications', 'repo'] })
);

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/ghj' }),

  (req, res) => {
  res.cookie('userName', req.session.passport.user._json.login, {
    httpOnly: false
  })
  res.cookie('isAuth', 'true',  {
    httpOnly: false
  })

  res.redirect('http://localhost:3000/') //res.json(req.session.passport.user)
  }
);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);



app.use((req, res) => {
  res.sendStatus(404);
});

if (!module.parent) {
  app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log(`Express server listening on port ${PORT}`);
  });
}
