import ApolloClient, { gql } from "apollo-boost";
import fetch from 'cross-fetch';

export const client = new ApolloClient({
  uri: "https://courseapi.herokuapp.com/graphql",
  fetch,
});
