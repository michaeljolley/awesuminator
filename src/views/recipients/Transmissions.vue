<template>
  <div v-if="transmissions">
    <b-card class="wrapper">
      <table class="table table-striped">
        <thead>
          <th scope="col">Message</th>
          <th scope="col">Received?</th>
        </thead>
        <tbody>
          <tr v-for="transmission in transmissions" :key="transmission._id">
            <td scope="row">
              {{transmission.salutation.greeting}}
              <br />
              {{transmission.message.message}}
            </td>
            <td>{{receipt(transmission.received)}}</td>
          </tr>
        </tbody>
      </table>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Transmissions",
  props: {
    transmissions: null
  },
  methods: {
    receipt(received) {
      if (received) {
        return received;
      } else {
        return "";
      }
    }
  }
};
</script>

<style></style>
