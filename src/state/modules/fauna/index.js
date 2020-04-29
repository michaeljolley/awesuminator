import { types } from "./mutation-types";
import { getters } from "./getters";

const state = {
  recipients: [],
  salutations: [],
  messages: [],
  currentRecipient: null,
  tones: [
    { value: null, text: "Select a preferred tone" },
    { value: "Neutral", text: "Neutral" },
    { value: "Masculine", text: "Masculine" },
    { value: "Feminine", text: "Feminine" },
  ],
  loading: false,
};

const gets = {
  [getters.FAUNA_GET_TONES]: (state) => state.tones,
  [getters.FAUNA_GET_RECIPIENT]: (state) => state.currentRecipient,
  [getters.FAUNA_GET_RECIPIENTS]: (state) => state.recipients,
};

const actions = {
  async [types.RECIPIENT_LOAD](context, id) {
    const recipient = await this._vm.$fauna.getRecipientById(id);
    context.commit(types.RECIPIENT_LOAD, recipient);
  },
  async [types.RECIPIENTS_LOAD](context) {
    const recipients = await this._vm.$fauna.getRecipients();
    context.commit(types.RECIPIENTS_LOAD, recipients);
  },
  async [types.RECIPIENTS_CREATE](context, recipient) {
    const newRecipient = await this._vm.$fauna.createRecipient(recipient);
    context.commit(types.RECIPIENTS_CREATE, newRecipient);
  },
  async [types.RECIPIENTS_UPDATE](context, recipient) {
    const updatedRecipient = await this._vm.$fauna.updateRecipient(recipient);
    context.commit(types.RECIPIENTS_UPDATE, updatedRecipient);
  },
  async [types.RECIPIENTS_DELETE](context, recipientId) {
    await this._vm.$fauna.deleteRecipient(recipientId);
    context.commit(types.RECIPIENTS_DELETE, recipientId);
  },
  async [types.MESSAGES_LOAD](context) {
    const messages = await this._vm.$fauna.getMessages();
    context.commit(types.MESSAGES_LOAD, messages);
  },
  async [types.MESSAGES_CREATE](context, message) {
    const newMessage = await this._vm.$fauna.createMessage(message);
    context.commit(types.MESSAGES_CREATE, newMessage);
  },
  async [types.MESSAGES_UPDATE](context, message) {
    const updatedMessage = await this._vm.$fauna.updateMessage(message);
    context.commit(types.MESSAGES_UPDATE, updatedMessage);
  },
  async [types.MESSAGES_DELETE](context, messageId) {
    await this._vm.$fauna.deleteMessage(messageId);
    context.commit(types.MESSAGES_DELETE, messageId);
  },
  async [types.SALUTATIONS_LOAD](context) {
    const salutations = await this._vm.$fauna.getSalutations();
    context.commit(types.SALUTATIONS_LOAD, salutations);
  },
  async [types.SALUTATIONS_CREATE](context, salutation) {
    const newSalutation = await this._vm.$fauna.createSalutation(salutation);
    context.commit(types.SALUTATIONS_CREATE, newSalutation);
  },
  async [types.SALUTATIONS_UPDATE](context, salutation) {
    const updatedSalutation = await this._vm.$fauna.updateSalutation(
      salutation
    );
    context.commit(types.SALUTATIONS_UPDATE, updatedSalutation);
  },
  async [types.SALUTATIONS_DELETE](context, salutationId) {
    await this._vm.$fauna.deleteSalutation(salutationId);
    context.commit(types.SALUTATIONS_DELETE, salutationId);
  },
};

const mutations = {
  [types.RECIPIENTS_LOAD](store, payload) {
    store.recipients = payload;
  },
  [types.RECIPIENT_LOAD](store, payload) {
    store.currentRecipient = payload;
  },
  [types.RECIPIENTS_CREATE](state, newRecipient) {
    state.recipients.push(newRecipient);
  },
  [types.RECIPIENTS_UPDATE](state, recipient) {
    const position = state.recipients.findIndex((r) => r._id === recipient._id);
    state.recipients[position] = recipient;
  },
  [types.RECIPIENTS_DELETE](state, deletedRecipientId) {
    state.recipients = state.recipients.filter(
      (f) => f._id !== deletedRecipientId
    );
  },
  [types.MESSAGES_LOAD](store, payload) {
    store.messages = payload;
  },
  [types.MESSAGES_CREATE](state, newMessage) {
    state.messages.push(newMessage);
  },
  [types.MESSAGES_UPDATE](state, message) {
    const position = state.messages.findIndex((r) => r._id === message._id);
    state.messages[position] = message;
  },
  [types.MESSAGES_DELETE](state, deletedMessageId) {
    state.messages = state.messages.filter((f) => f._id !== deletedMessageId);
  },
  [types.SALUTATIONS_LOAD](store, payload) {
    store.salutations = payload;
  },
  [types.SALUTATIONS_CREATE](state, newSalutation) {
    state.salutations.push(newSalutation);
  },
  [types.SALUTATIONS_UPDATE](state, salutation) {
    const position = state.salutations.findIndex(
      (r) => r._id === salutation._id
    );
    state.salutations[position] = salutation;
  },
  [types.SALUTATIONS_DELETE](state, deletedSalutationId) {
    state.salutations = state.salutations.filter(
      (f) => f._id !== deletedSalutationId
    );
  },
};

export const fauna = {
  store: {
    state,
    getters: gets,
    actions,
    mutations,
  },
  types,
  getters,
};
