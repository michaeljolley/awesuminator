import { types } from "./mutation-types";

const state = {};

const actions = {
  async [types.SEND_MESSAGE](context, recipient) {
    // Choose a random message & salutation and send it to the provided
    // recipient.  Then save that combo to FaunaDb.
    this._vm.$fauna//const recipients = await this._vm.$fauna.getRecipients();
    .context
      .commit(types.SEND_MESSAGE, recipient);
  },
};

const mutations = {
  [types.SEND_MESSAGE](store, payload) {},
};

export const functions = {
  store: {
    state,
    actions,
    mutations,
  },
  types,
};
