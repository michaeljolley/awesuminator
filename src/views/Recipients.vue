<template>
  <div class="main-content">
    <BreadCrumb :page="'Recipients'" :icon="'people'" />

    <b-card class="wrapper">
      <table class="table">
        <thead>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Sex</th>
          <th scope="col"></th>
        </thead>
        <tbody>
          <tr v-for="recipient in recipients" :key="recipient._id">
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
              <b-form-select v-model="recipient.sex" :options="sexes" required></b-form-select>
            </td>
            <td>
              <b-button-group>
                <button type="button" class="btn btn-info" v-on:click="updateRecipient(recipient)">
                  <b-icon-pencil-square />
                </button>
                <b-button variant="danger" v-on:click="deleteRecipient(recipient._id)">
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
      <b-card-title>Add Recipient</b-card-title>
      <table class="table">
        <thead>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Sex</th>
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
              <b-form-select v-model="newRecipient.sex" :options="sexes" required></b-form-select>
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
  name: "Recipients",
  data() {
    return {
      newRecipient: this.defaultRecipient()
    };
  },
  computed: mapState({
    recipients: state => state.fauna.recipients,
    sexes: state => state.fauna.sexes
  }),
  created() {
    this.$store.dispatch(types.fauna.RECIPIENTS_LOAD);
    this.newRecipient = this.defaultRecipient();
  },
  methods: {
    deleteRecipient(recipientId) {
      this.$store.dispatch(types.fauna.RECIPIENTS_DELETE, recipientId);
    },
    createRecipient() {
      this.$store.dispatch(types.fauna.RECIPIENTS_CREATE, this.newRecipient);
      this.newRecipient = this.defaultRecipient();
    },
    updateRecipient(recipient) {
      this.$store.dispatch(types.fauna.RECIPIENTS_UPDATE, recipient);
    },
    defaultRecipient() {
      return {
        firstName: "",
        lastName: "",
        sex: null
      };
    }
  }
};
</script>

<style></style>
