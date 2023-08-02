import { gql } from "@apollo/client";

export const GET_ALL_QUERIES = gql`
  query getAllQuotes {
    userquotes {
      name
      by {
        _id
        firstName
      }
    }
  }
`;

export const GET_PROFILE = gql`
  query userProfile {
    user: userProfile {
      firstName
      lastName
      email
      myquotes {
        name
      }
    }
  }
`;

export const GET_INDIVIDUAL_PROFILES = gql`
  query getIndUser($userId: ID!) {
    user: userdata(_id: $userId) {
      firstName
      lastName
      email
      myquotes {
        name
      }
    }
  }
`;
