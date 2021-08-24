<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <div>
          <div class="container">
            <h1>Survey</h1>
            <p>Please fill in this survey to complete the process.</p>
            <hr />

            <label for="email"><b>Full Name</b></label>
            <input
              type="text"
              placeholder="Full Name"
              name="Full Name"
              id="fullName"
              v-model="fullName"
              required
            />

            <label for="psw"><b>Education</b></label>
            <input
              type="text"
              placeholder="Enter University"
              name="uni"
              id="uni"
              v-model="education"
              required
            />

            <label for="psw-repeat"><b>Work Place</b></label>
            <input
              type="text"
              placeholder="Enter your current work place"
              name="work"
              id="work"
              v-model="workPlc"
              required
            />
            <hr />
            <button type="submit" @click="saveSurveyData()" class="registerbtn">
              Next
            </button>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mutations } from "../state/state";
export default {
  name: "Survey",
  methods: {
    saveSurveyData() {
      if (this.fullName == "" || this.education == "" || this.workPlc == "") return;
      const payload = {
        fullName: this.fullName,
        education: this.education,
        workPlc: this.workPlc
      };
      mutations.saveSurveyData(payload);
      this.$router.push("/landing");
    }
  },
  data: () => ({
    fullName: "",
    education: "",
    workPlc: ""
  })
};
</script>
<style scoped>
.btn {
  margin: 10px;
}
</style>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
}

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: #55a4e9;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
