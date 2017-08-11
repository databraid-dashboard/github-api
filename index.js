const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const root = require('./src/resolvers/RootResolver');
const schema = require('./src/schema/schema');

const app = express();
const PORT = process.env.PORT || 8000;

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
};

app.use(bodyParser.json());

app.use(allowCrossDomain);

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.use((req, res) => {
  res.sendStatus(404);
});

if (!module.parent) {
  app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log(`Express server listening on port ${PORT}`);
  });
}
