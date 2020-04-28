<template>
  <div class="main-content">
    <BreadCrumb :page="'Salutations'" :icon="'chat'" />

    <b-card class="wrapper">
      <table class="table">
        <thead>
          <th scope="col">Greeting</th>
          <th scope="col">Tone</th>
          <th scope="col"></th>
        </thead>
        <tbody>
          <tr v-for="salutation in salutations" :key="salutation._id">
            <td scope="row">
              <b-form-textarea
                id="greeting"
                v-model="salutation.greeting"
                rows="2"
                required
                placeholder="Greeting"
              ></b-form-textarea>
            </td>
            <td>
              <b-form-select v-model="salutation.tone" :options="tones" required></b-form-select>
            </td>
            <td>
              <b-button-group>
                <button
                  type="button"
                  class="btn btn-info"
                  v-on:click="updateSalutation(salutation)"
                >
                  <b-icon-pencil-square />
                </button>
                <b-button variant="danger" v-on:click="deleteSalutation(salutation._id)">
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
      <b-card-title>Add Salutation</b-card-title>
      <table class="table">
        <thead>
          <th scope="col">Greeting</th>
          <th scope="col">Tone</th>
          <th scope="col"></th>
        </thead>
        <tbody>
          <tr>
            <td scope="row">
              <b-form-textarea
                v-model="newSalutation.greeting"
                rows="2"
                required
                placeholder="Greeting"
              ></b-form-textarea>
            </td>
            <td>
              <b-form-select v-model="newSalutation.tone" :options="tones" required></b-form-select>
            </td>
            <td>
              <b-button variant="success" v-on:click="createSalutation()">Add</b-button>
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
  name: "Salutations",
  data() {
    return {
      newSalutation: this.defaultSalutation()
    };
  },
  computed: mapState({
    salutations: state => state.fauna.salutations,
    tones: state => state.fauna.tones
  }),
  created() {
    this.$store.dispatch(types.fauna.SALUTATIONS_LOAD);
    this.newSalutation = this.defaultSalutation();
  },
  methods: {
    deleteSalutation(salutationId) {
      this.$store.dispatch(types.fauna.SALUTATIONS_DELETE, salutationId);
    },
    createSalutation() {
      this.$store.dispatch(types.fauna.SALUTATIONS_CREATE, this.newSalutation);
      this.newSalutation = this.defaultSalutation();
    },
    updateSalutation(salutation) {
      this.$store.dispatch(types.fauna.SALUTATIONS_UPDATE, salutation);
    },
    defaultSalutation() {
      return {
        greeting: "",
        tone: null
      };
    }
  }
};
</script>

<style></style>
