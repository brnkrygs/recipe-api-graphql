const fs = require( 'fs' );
const express = require( 'express' );
const graphqlHTTP = require( 'express-graphql' );
const { buildSchema } = require( 'graphql' );
const root = require( './resolvers' );

// Construct a schema, using GraphQL schema language
const schemaContent = fs.readFileSync( './schema.graphql' ).toString();
const schema = buildSchema( schemaContent );

const app = express();

app.use( '/graphql', graphqlHTTP( {
  schema: schema,
  rootValue: root,
  graphiql: true,
} ) );
app.listen( 4000 );

console.log( 'Running a GraphQL API server at http://localhost:4000/graphql' );