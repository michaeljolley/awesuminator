import gql from "graphql-tag";

export const QUERY_RECIPIENTS = gql`
  query AllRecipients {
    allRecipients {
      data {
        _id
        firstName
        lastName
        tone
      }
    }
  }
`;

export const QUERY_RECIPIENTS_WITH_TRANSMISSIONS = gql`
  query AllRecipientsWithTransmissions($id: ID!) {
    findRecipientByID(id: $id) {
      _id
      firstName
      lastName
      tone
      transmissions {
        data {
          salutation {
            greeting
          }
          message {
            message
          }
          received
        }
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
        tone
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
        tone
      }
    }
  }
`;
