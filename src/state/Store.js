import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import ApolloClient from "apollo-boost";

import * as types from "./Mutations";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://graphql.fauna.com/graphql",
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_FAUNADB_SECRET}`,
  },
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipients: [],
    salutations: [],
    messages: [],
    loading: false,
  },
  mutations: {
    [types.USER_LOG_IN]() {},
    [types.USER_LOG_OUT]() {},
    [types.LOADING](state, isLoading) {
      state.loading = isLoading;
    },
    [types.SAVE_MESSAGE]() {},
    [types.LOAD_RECIPIENTS](store, payload) {
      store.recipients = payload;
    },
    [types.SAVE_RECIPIENT](state, newRecipient) {
      state.recipients.push(newRecipient);
    },
    [types.DELETE_RECIPIENT]() {},
    [types.SAVE_SALUTATION]() {},
  },
  actions: {
    async [types.USER_LOG_IN]() {},
    [types.USER_LOG_OUT]() {},
    async [types.SAVE_MESSAGE]() {},
    async [types.LOAD_RECIPIENTS](context) {
      const query = await client.query({
        query: gql`
          query AllRecipients {
            allRecipients {
              data {
                firstName
                lastName
                sex
              }
            }
          }
        `,
      });

      const recipients = query.data.allRecipients.data;
      context.commit(types.LOAD_RECIPIENTS, recipients);
    },
    async [types.SAVE_RECIPIENT](context, recipient) {
      const mutation = await client.mutate({
        mutation: gql`
          createRecipient(data: {

          }) {
            firstName
            lastName
            sex
          }
        `,
      });

      context.commit(types.SAVE_RECIPIENT, newRecipient);
    },
    async [types.DELETE_RECIPIENT]() {},
    async [types.SAVE_SALUTATION]() {},
  },
});
