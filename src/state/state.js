// state.js
import { reactive } from 'vue'
export const state = reactive({ userData: {}, surveyData: {} })

export const mutations = {
  saveData(payload) {
    console.log('Setting "User Data": ', payload)
    state.userData = payload
  },
  saveSurveyData(payload) {
    console.log('Setting "Survey Data": ', payload)
    state.surveyData = payload
  }
}