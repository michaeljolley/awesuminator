<template>
  <div v-if="recipient !== null">
    <BreadCrumb
      :page="`${recipient.firstName} ${recipient.lastName}`"
      :folder="'Recipients'"
      :icon="'people'"
    />

    <b-card class="wrapper">
      <table class="table">
        <thead>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Preferred Tone</th>
          <th scope="col"></th>
        </thead>
        <tbody>
          <tr>
            <td scope="row">
              <b-form-input
                v-model="recipient.firstName"
                type="text"
                required
                placeholder="First Name"
              ></b-form-input>
            </td>
            <td>
              <b-form-input
                v-model="recipient.lastName"
                type="text"
                required
                placeholder="Last Name"
              ></b-form-input>
            </td>
            <td>
              <b-form-select v-model="recipient.tone" :options="tones" required></b-form-select>
            </td>
            <td>
              <b-button-group>
                <b-button variant="primary" v-on:click="updateRecipient()">
                  <b-icon-pencil-square />
                </b-button>
                <b-button variant="secondary" v-on:click="sendMessage()">
                  <b-icon-envelope />
                </b-button>
                <b-button variant="danger" v-on:click="deleteRecipient()">
                  <b-icon-trash />
                </b-button>
              </b-button-group>
            </td>
          </tr>
        </tbody>
      </table>
    </b-card>
    <p></p>
    <Transmissions :transmissions="recipient.transmissions.data" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { types } from "@/state";

import Transmissions from "@/views/recipients/Transmissions.vue";

export default {
  name: "Recipient",
  components: {
    Transmissions
  },
  props: {
    id: null
  },
  computed: mapState({
    tones: state => state.fauna.tones,
    recipient: state => state.fauna.currentRecipient
  }),
  created() {
    this.$store.dispatch(types.fauna.RECIPIENT_LOAD, this.id);
  },
  methods: {
    async deleteRecipient() {
      await this.$store.dispatch(
        types.fauna.RECIPIENTS_DELETE,
        this.recipient._id
      );
      this.$router.push("/recipients");
    },
    updateRecipient() {
      this.$store.dispatch(types.fauna.RECIPIENTS_UPDATE, this.recipient);
    },
    sendMessage() {
      this.$store.dispatch(types.functions.SEND_MESSAGE, this.recipient);
    }
  }
};
</script>

<style></style>
