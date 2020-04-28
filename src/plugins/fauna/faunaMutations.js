import gql from "graphql-tag";

export const MUTATE_RECIPIENT_CREATE = gql`
  mutation CreateRecipient($recipient: RecipientInput!) {
    createRecipient(data: $recipient) {
      _id
      firstName
      lastName
      sex
    }
  }
`;

export const MUTATE_RECIPIENT_UPDATE = gql`
  mutation UpdateRecipient($id: ID!, $recipient: RecipientInput!) {
    updateRecipient(id: $id, data: $recipient) {
      _id
      firstName
      lastName
      sex
    }
  }
`;

export const MUTATE_RECIPIENT_DELETE = gql`
  mutation DeleteRecipient($id: ID!) {
    deleteRecipient(id: $id) {
      _id
      firstName
      lastName
      sex
    }
  }
`;

export const MUTATE_MESSAGE_CREATE = gql`
  mutation CreateMessage($message: MessageInput!) {
    createMessage(data: $message) {
      _id
      message
      sex
    }
  }
`;

export const MUTATE_MESSAGE_UPDATE = gql`
  mutation UpdateMessage($id: ID!, $message: MessageInput!) {
    updateMessage(id: $id, data: $message) {
      _id
      message
      sex
    }
  }
`;

export const MUTATE_MESSAGE_DELETE = gql`
  mutation DeleteMessage($id: ID!) {
    deleteMessage(id: $id) {
      _id
      message
      sex
    }
  }
`;

export const MUTATE_SALUTATION_CREATE = gql`
  mutation CreateSalutation($salutation: SalutationInput!) {
    createSalutation(data: $salutation) {
      _id
      greeting
      sex
    }
  }
`;

export const MUTATE_SALUTATION_UPDATE = gql`
  mutation UpdateSalutation($id: ID!, $salutation: SalutationInput!) {
    updateSalutation(id: $id, data: $salutation) {
      _id
      greeting
      sex
    }
  }
`;

export const MUTATE_SALUTATION_DELETE = gql`
  mutation DeleteSalutation($id: ID!) {
    deleteSalutation(id: $id) {
      _id
      greeting
      sex
    }
  }
`;
