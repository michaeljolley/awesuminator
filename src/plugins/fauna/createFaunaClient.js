import Vue from "vue";
import { store } from "@/state";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

import * as faunaQueries from "@/plugins/fauna/faunaQueries";
import * as faunaMutations from "@/plugins/fauna/faunaMutations";

let instance;

export const getInstance = () => instance;

export const createFaunaClient = ({ ...options }) => {
  if (instance) return instance;

  instance = new Vue({
    store,
    data() {
      return {
        faunaDbSecret: "",
        faunaClient: null,
      };
    },
    async created() {
      const cache = new InMemoryCache();

      this.faunaClient = new ApolloClient({
        uri: "https://graphql.fauna.com/graphql",
        headers: {
          Authorization: `Bearer ${options.faunaDbSecret}`,
        },
        cache,
      });
    },
    methods: {
      async query(query, variables) {
        return await this.faunaClient.query({ query, variables });
      },
      async mutate(mutation, variables) {
        return await this.faunaClient.mutate({ mutation, variables });
      },
      async getRecipients() {
        try {
          const query = await this.query(faunaQueries.QUERY_RECIPIENTS);
          return query.data.allRecipients.data;
        } catch (err) {
          console.log(err);
        }
      },
      async getRecipientById(id) {
        try {
          const query = await this.query(
            faunaQueries.QUERY_RECIPIENTS_WITH_TRANSMISSIONS,
            { id }
          );
          return query.data.findRecipientByID;
        } catch (err) {
          console.log(err);
        }
      },
      async getSalutations() {
        try {
          const query = await this.query(faunaQueries.QUERY_SALUTATIONS);
          return query.data.allSalutations.data;
        } catch (err) {
          console.log(err);
        }
      },
      async getMessages() {
        try {
          const query = await this.query(faunaQueries.QUERY_MESSAGES);
          return query.data.allMessages.data;
        } catch (err) {
          console.log(err);
        }
      },
      async createRecipient(recipient) {
        try {
          const mutation = await this.mutate(
            faunaMutations.MUTATE_RECIPIENT_CREATE,
            { recipient }
          );
          return mutation.data.createRecipient;
        } catch (err) {
          console.log(err);
        }
      },
      async updateRecipient(updatedRecipient) {
        try {
          const mutation = await this.mutate(
            faunaMutations.MUTATE_RECIPIENT_UPDATE,
            {
              id: updatedRecipient._id,
              recipient: {
                firstName: updatedRecipient.firstName,
                lastName: updatedRecipient.lastName,
                tone: updatedRecipient.tone,
              },
            }
          );
          return mutation.data.updateRecipient;
        } catch (err) {
          console.log(err);
        }
      },
      async deleteRecipient(id) {
        try {
          const mutation = await this.mutate(
            faunaMutations.MUTATE_RECIPIENT_DELETE,
            { id }
          );
          return mutation.data.deleteRecipient;
        } catch (err) {
          console.log(err);
        }
      },
      async createSalutation(salutation) {
        try {
          const mutation = await this.mutate(
            faunaMutations.MUTATE_SALUTATION_CREATE,
            { salutation }
          );
          return mutation.data.createSalutation;
        } catch (err) {
          console.log(err);
        }
      },
      async updateSalutation(updatedSalutation) {
        try {
          const mutation = await this.mutate(
            faunaMutations.MUTATE_SALUTATION_UPDATE,
            {
              id: updatedSalutation._id,
              salutation: {
                greeting: updatedSalutation.greeting,
                tone: updatedSalutation.tone,
              },
            }
          );
          return mutation.data.updateSalutation;
        } catch (err) {
          console.log(err);
        }
      },
      async deleteSalutation(id) {
        try {
          const mutation = await this.mutate(
            faunaMutations.MUTATE_SALUTATION_DELETE,
            { id }
          );
          return mutation.data.deleteSalutation;
        } catch (err) {
          console.log(err);
        }
      },
      async createMessage(message) {
        try {
          const mutation = await this.mutate(
            faunaMutations.MUTATE_MESSAGE_CREATE,
            { message }
          );
          return mutation.data.createMessage;
        } catch (err) {
          console.log(err);
        }
      },
      async updateMessage(updatedMessage) {
        try {
          const mutation = await this.mutate(
            faunaMutations.MUTATE_MESSAGE_UPDATE,
            {
              id: updatedMessage._id,
              message: {
                message: updatedMessage.message,
                tone: updatedMessage.tone,
              },
            }
          );
          return mutation.data.updateMessage;
        } catch (err) {
          console.log(err);
        }
      },
      async deleteMessage(id) {
        try {
          const mutation = await this.mutate(
            faunaMutations.MUTATE_MESSAGE_DELETE,
            { id }
          );
          return mutation.data.deleteMessage;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  return instance;
};
