const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const root = require('./src/resolvers/RootResolver');
const schema = require('./src/schema/schema');
const GitHubStrategy = require('passport-github2').Strategy;
const session = require('express-session');
const passport = require('passport');
const partials = require('express-partials');
const cors = require('cors');

const app = express();
/* eslint-disable no-unused-vars */
const PORT = process.env.PORT || 8000;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const PRODUCTION_CALLBACK_URL = process.env.PRODUCTION_CALLBACK_URL;
const LOCAL_CALLBACK_URL = process.env.LOCAL_CALLBACK_URL;
//
// const allowCrossDomain = (req, res, next) => {
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Origin', req.headers.origin);
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers',
// 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
//   if (req.method === 'OPTIONS') {
//     res.send(200);
//   } else {
//     next();
//   }
// };

function urlPath() {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000/';
  }
  return 'http://someLiveURL.com/';
}


app.use('/', partials());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SECRET,
  keys: [process.env.SESSION_KEY1, process.env.SESSION_KEY2],
  resave: false,
  saveUninitialized: false,
}));
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.NODE_ENV === 'development' ? process.env.LOCAL_CALLBACK_URL : process.env.PRODUCTION_CALLBACK_URL,
},
  ((accessToken, refreshToken, profile, done) => {
    process.env.TKN = accessToken;
    process.nextTick(() =>
      done(null, profile),
    );
  }),
));


app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);


app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email', 'read:org', 'notifications', 'repo'] }),
);

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  /* eslint-disable no-underscore-dangle */
  (req, res) => {
    res.cookie('userName', req.session.passport.user._json.login, {
      httpOnly: false,
    });
    res.cookie('githubAccessToken', process.env.TKN, {
      httpOnly: false,
    });
    res.redirect(urlPath());
  },
);
app.get('/logout', (req, res) => {
  res.clearCookie('githubAccessToken');
  res.clearCookie('userName');
  res.redirect(`${process.env.FRONT_END_URL}`);
});
app.use('/', (req, res) => {
  res.sendStatus(200);
});
app.use((req, res) => {
  res.sendStatus(404);
});

if (!module.parent) {
  app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log(`Express server listening on port ${PORT}`);
  });
}
