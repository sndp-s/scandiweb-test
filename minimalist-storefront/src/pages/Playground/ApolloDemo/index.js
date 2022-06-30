///////// libs /////////
import React, { Component } from "react";
import { request, gql } from "graphql-request";

class ApolloDemo extends Component {
  render() {
    const query = gql`
      {
        categories {
          name
        }
      }
    `;
    request("http://localhost:4000", query).then((data) => console.log(data));

    return <>apollo demo</>;
  }
}

export default ApolloDemo;
