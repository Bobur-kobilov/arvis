<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <v-col cols="12">
          <v-img :src="arvis_logo" class="my-3" contain height="150" />
        </v-col>
        <v-btn
          @click="goToRegistration()"
          color="accent"
          elevation="13"
          small
          x-large
          x-small
          class="btn"
        >
          New User
        </v-btn>
        <v-btn
          @click="goToInvitation()"
          color="primary"
          elevation="13"
          small
          x-large
          x-small
          class="btn"
        >
          Invited User
        </v-btn>
        <v-btn
          @click="goToLogin()"
          color="secondary"
          elevation="13"
          small
          x-large
          x-small
          class="btn"
        >
          Existing User
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mutations } from "../state/state";
import arvis_logo from "../assets/arvis_logo.png";
export default {
  name: "Main",
  data: () => ({
    arvis_logo
  }),
  methods: {
    goToRegistration() {
      this.$router.push("/registration");
    },
    goToInvitation() {
      const payload = {
        email: "sam@gmail.com",
        pswd: "xxxxxxxx",
        confirmPswd: "xxxxxxxx"
      };
      mutations.saveData(payload);
      this.$router.push("/invitation");
    },
    goToLogin() {
      const userPayload = {
        email: "tom@gmail.com",
        pswd: "xxxxxxxx",
        confirmPswd: "xxxxxxxx"
      };
      mutations.saveData(userPayload);
      const surveyData = {
        fullName: "Sam Usmanov",
        education: "Sejong University",
        workPlc: "Google Inc"
      };
      mutations.saveSurveyData(surveyData);
      this.$router.push("/landing");
    }
  }
};
</script>
<style scoped>
.btn {
  margin: 10px;
}
</style>
