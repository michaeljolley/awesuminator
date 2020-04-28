<template>
  <div>
    <BreadCrumb :page="'Recipients'" :icon="'people'" />

    <b-card class="wrapper">
      <table class="table">
        <thead>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Preferred Tone</th>
          <th scope="col"></th>
        </thead>
        <tbody>
          <tr v-for="recipient in recipients" :key="recipient._id">
            <td scope="row">{{recipient.firstName}}</td>
            <td>{{recipient.lastName}}</td>
            <td>{{recipient.tone}}</td>
            <td>
              <router-link :to="`recipients/${recipient._id}`" class="btn btn-primary">
                <b-icon-pencil-square />
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </b-card>
    <p></p>
    <b-card class="wrapper">
      <b-card-title>Add Recipient</b-card-title>
      <table class="table">
        <thead>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Tone</th>
          <th scope="col"></th>
        </thead>
        <tbody>
          <tr>
            <td scope="row">
              <b-form-input
                id="firstName"
                v-model="newRecipient.firstName"
                type="text"
                required
                placeholder="First Name"
              ></b-form-input>
            </td>
            <td>
              <b-form-input
                id="lastName"
                v-model="newRecipient.lastName"
                type="text"
                required
                placeholder="Last Name"
              ></b-form-input>
            </td>
            <td>
              <b-form-select v-model="newRecipient.tone" :options="tones" required></b-form-select>
            </td>
            <td>
              <b-button variant="success" v-on:click="createRecipient()">Add</b-button>
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
  name: "RecipientDetail",
  data() {
    return {
      newRecipient: this.defaultRecipient()
    };
  },
  computed: mapState({
    recipients: state => state.fauna.recipients,
    tones: state => state.fauna.tones
  }),
  created() {
    this.$store.dispatch(types.fauna.RECIPIENTS_LOAD);
    this.newRecipient = this.defaultRecipient();
  },
  methods: {
    createRecipient() {
      this.$store.dispatch(types.fauna.RECIPIENTS_CREATE, this.newRecipient);
      this.newRecipient = this.defaultRecipient();
    },
    defaultRecipient() {
      return {
        firstName: "",
        lastName: "",
        tone: null
      };
    }
  }
};
</script>

<style></style>
