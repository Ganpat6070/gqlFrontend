import { gql } from "@apollo/client";

export const USER_SIGNUP = gql`
  mutation createUser($newUser: UserInput!) {
    user: signupUser(newUser: $newUser) {
      firstName
    }
  }
`;

export const USER_LOGIN = gql`
  mutation signInUser($userSignIn: SignInInput!) {
    user: signInUser(userSignIn: $userSignIn) {
      token
    }
  }
`;

export const USER_QUOTES = gql`
  mutation createQuotes($name: String!) {
    quotes: createQuotes(name: $name)
  }
`;
