// to start main server: npm run dev
// to start json:sever type: npm run json:server

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  // graphiql is a development ui to work with graphQL
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening');
});