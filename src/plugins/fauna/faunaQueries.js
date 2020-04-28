import gql from "graphql-tag";

export const QUERY_RECIPIENTS = gql`
  query AllRecipients {
    allRecipients {
      data {
        _id
        firstName
        lastName
        sex
      }
    }
  }
`;

export const QUERY_SALUTATIONS = gql`
  query AllSalutations {
    allSalutations {
      data {
        _id
        greeting
        sex
      }
    }
  }
`;

export const QUERY_MESSAGES = gql`
  query AllMessages {
    allMessages {
      data {
        _id
        message
        sex
      }
    }
  }
`;
