import fetch from 'isomorphic-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: 'https://doc-assistant-back.onrender.com/graphql'
  })
});

export default client;
