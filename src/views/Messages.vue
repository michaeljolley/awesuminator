<template>
  <div class="main-content">
    <BreadCrumb :page="'Messages'" :icon="'envelope'" />

    <b-card class="wrapper">
      <table class="table">
        <thead>
          <th scope="col">Message</th>
          <th scope="col">Sex</th>
          <th scope="col"></th>
        </thead>
        <tbody>
          <tr v-for="message in messages" :key="message._id">
            <td scope="row">
              <b-form-textarea v-model="message.message" rows="2" required placeholder="Message"></b-form-textarea>
            </td>
            <td>
              <b-form-select v-model="message.sex" :options="sexes" required></b-form-select>
            </td>
            <td>
              <b-button-group>
                <button type="button" class="btn btn-info" v-on:click="updateMessage(message)">
                  <b-icon-pencil-square />
                </button>
                <b-button variant="danger" v-on:click="deleteMessage(message._id)">
                  <b-icon-trash />
                </b-button>
              </b-button-group>
            </td>
          </tr>
        </tbody>
      </table>
    </b-card>
    <p></p>
    <b-card class="wrapper">
      <b-card-title>Add Message</b-card-title>
      <table class="table">
        <tbody>
          <tr>
            <td scope="row">
              <b-form-textarea
                id="message"
                v-model="newMessage.message"
                rows="2"
                required
                placeholder="Message"
              ></b-form-textarea>
            </td>
            <td>
              <b-form-select v-model="newMessage.sex" :options="sexes" required></b-form-select>
            </td>
            <td>
              <b-button variant="success" v-on:click="createMessage()">Add</b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { types } from "@/state";

export default {
  name: "Messages",
  data() {
    return {
      newMessage: this.defaultMessage()
    };
  },
  computed: mapState({
    messages: state => state.fauna.messages,
    sexes: state => state.fauna.sexes
  }),
  created() {
    this.$store.dispatch(types.fauna.MESSAGES_LOAD);
    this.newMessage = this.defaultMessage();
  },
  methods: {
    deleteMessage(messageId) {
      this.$store.dispatch(types.fauna.MESSAGES_DELETE, messageId);
    },
    createMessage() {
      this.$store.dispatch(types.fauna.MESSAGES_CREATE, this.newMessage);
      this.newMessage = this.defaultMessage();
    },
    updateMessage(message) {
      this.$store.dispatch(types.fauna.MESSAGES_UPDATE, message);
    },
    defaultMessage() {
      return {
        message: "",
        sex: null
      };
    }
  }
};
</script>

<style></style>
