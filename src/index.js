import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/6ofe3ca4bb0x/environments/master?access_token=uQXTOU_cXH35LiyIdYDLLM83gr51dBoCny9h7RbBzLM",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {
        portfolioProjectCollection {
          items {
            title
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
