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
// app.use(methodOverride());

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



app.use('/', (req, res) => {
  res.sendStatus(200);
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
