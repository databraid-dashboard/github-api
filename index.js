const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const root = require('./src/resolvers/UserResolver');
const schema = require('./src/schema/schema');


const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

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
