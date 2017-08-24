const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const root = require('./src/resolvers/RootResolver');
const schema = require('./src/schema/schema');
const GitHubStrategy = require('passport-github2').Strategy;
const passport = require('passport');
const partials = require('express-partials');
const session = require('express-session');
const cors = require('cors');
const app = express();

app.use(partials());

const PORT = process.env.PORT || 8000;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const SECRET = process.env.SECRET

const LOCAL_CALLBACK_URL = process.env.LOCAL_CALLBACK_URL
const NODE_ENV = process.env.NODE_ENV

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SECRET,
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
  callbackURL: NODE_ENV === 'development' ? LOCAL_CALLBACK_URL : 'https:deployed_site.com',
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
passport.authenticate('github', { scope: ['user:email', 'read:org', 'notifications', 'repo'] })
);

app.get('/auth/github/callback',
passport.authenticate('github', { failureRedirect: '/' }),

(req, res) => {
  res.cookie('userName', req.session.passport.user._json.login, {
    httpOnly: false
  })
  res.cookie('isAuth', 'true',  {
    httpOnly: false
  })

  res.redirect(urlPath())
}
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
function urlPath() {
  if (NODE_ENV === 'development') {
    return 'http://localhost:3000/'
  } else {
    return 'http://someLiveURL.com/'
  }
}
