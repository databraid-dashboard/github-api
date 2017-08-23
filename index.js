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
const CALLBACK_URL = process.env.CALLBACK_URL
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
  callbackURL: env = 'development'? CALLBACK_URL : 'https:deployed_site.com',
},
  ((accessToken, refreshToken, profile, done) => {
    process.env.TKN = accessToken;
    process.nextTick(() =>
      done(null, profile),
    );
  }),
));

//TODO investigate this code as it is not setting any values
app.use((req, res, next) => {
  // console.log('res.locals.user', res.locals.user, 'req.body', req.body);
  res.locals.user = req.user;
  next();
});

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
passport.authenticate('github', { failureRedirect: '/ghj' }),

(req, res) => {
  res.cookie('userName', req.session.passport.user._json.login, {
    httpOnly: false
  })
  res.cookie('isAuth', 'true',  {
    httpOnly: false
  })

  res.redirect('http://localhost:3000/')
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
