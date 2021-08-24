<template>
  <v-container>
    <v-col cols="12">
      <v-img :src="arvis" class="my-3" contain height="200" />
    </v-col>
    <p>
      The company Arvis LLC (brand Arvis Group) was founded in 2008 and today
      it’s one of the leading Russian companies engaged in the supply of
      components and modules for local manufacturers of electronic equipment and
      miscellaneous equipment in Russia. We are operating 3 offices in Russia:
      Ekaterinburg, Moscow, Saint-Petersburg and one office in ShenZhen (China)
      The company has two main tasks: To give an opportunity to developers to
      apply the best achievements of the world's leading manufacturers of
      electronic components and modules in the up-to-date designs. Provide
      continuous supplies and competitive prices of electronics components and
      modules for the customers. Our main customers produce wide range of
      products for - telecommunications (<a href="http://eltex.nsk.ru)"
        >Eltex</a
      >
      - industrial automation (Prosoft-Systems http://prosoftsystems.com) -
      medical (Denas http://denas.ru/, Triton Electronics http://www.triton.ru)
      To implement our tasks, we are searching and support partnerships with
      world leader semiconductor companies, such as Texas Instruments, Freescale
      Semiconductors, STMicroelectronics, Micron Technology Corp., Xilinx Corp.,
      International Rectifier, Maxim and other. Works closely together with
      Global and European Suppliers of electronic components such Avnet Corp,
      Arrow Corp., Digi-Key Corp and other. Arvis LLC provides and supports
      technically more than 50 brands. In the past few years, our company
      actively expands the linecard by electromechanical and electrical
      equipment. To best meet the needs of our clients, we have extensive
      warehouse in Yekaterinburg and develops our own logistics system which can
      shrink delivery time. At all stages of development and production, our
      customers can receive qualified help of experienced engineers. For the
      moment the company staff is 90 people The company's quality management
      system meets requirements of ISO 9001: 2008.
    </p>
  </v-container>
</template>
<script>
import { state } from "../state/state";
import arvis from "../assets/arvis.jpeg";
export default {
  name: "Landing Page",
  created() {
    console.log("############ USER DATA ##############");
    console.log("EMAIL: ", this.userData.email);
    console.log("PASWORD: ", "123xxxxxxxxx");

    console.log("############ SURVEY DATA #############");
    console.log("FULL NAME: ", this.surveyData.fullName);
    console.log("EDUCATION: ", this.surveyData.education);
    console.log("WORK PLACE: ", this.surveyData.workPlc);
  },
  data: () => ({
    userData: state.userData,
    arvis,
    surveyData: state.surveyData
  })
};
</script>
