<template>
  <div>
    <table>
      <tbody>
        <tr v-for="recipient in recipients" :key="recipient.id">
          <td>{{ recipient.firstName }} {{ recipient.lastName }}</td>
          <td>{{ recipient.sex }}</td>
          <td>
            <button type="button" v-on:click="deleteRecipient(recipient)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as types from "@/state/Mutations";

export default {
  name: "Recipients",
  computed: mapState({
    recipients: (state) => state.recipients,
  }),
  created() {
    this.$store.dispatch(types.LOAD_RECIPIENTS);
  },
  methods: {
    deleteRecipient(recipient) {
      this.$store.dispatch(types.DELETE_RECIPIENT, recipient);
    },
    saveRecipient() {
      const recipient = {
        firstName: "Ed",
        lastName: "Charbeneau",
        sex: "M",
      };
      this.$store.dispatch(types.SAVE_RECIPIENT, recipient);
    },
  },
};
</script>

<style></style>
