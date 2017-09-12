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

const PORT = process.env.PORT || 8000;

function urlPath() {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000/';
  }
  return 'http://someLiveURL.com/';
}

app.use(partials());
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
  callbackURL: process.env.NODE_ENV === 'development' ? process.env.LOCAL_CALLBACK_URL : 'https:deployed_site.com',
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
    res.cookie('isAuth', 'true', {
      httpOnly: false,
    });

    res.redirect(urlPath());
  },
);
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
