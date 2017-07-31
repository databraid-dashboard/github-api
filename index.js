const express = require('express');
const bodyParser = require('body-parser');
const allUserData = require('./src/resolvers/UserResolver');
// import { root } from './src/resolvers/UserResolver';
const graphiqlExpress = require('graphql-server-express');
const graphqlExpress = require('graphql-server-express');
// import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
const makeExecutableSchema = require('graphql-tools')
// import { makeExecutableSchema } from 'graphql-tools';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('aok');
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Express server listening on port ${PORT}`);
});
