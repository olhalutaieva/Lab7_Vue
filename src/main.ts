import Vue from 'vue';
import App from './App.vue';
import router from './router'; // імпорт роутера
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBywtIOSSIQlTz0vnLjFXWA9sPiIkfZStM",
  authDomain: "lab6-a4744.firebaseapp.com",
  projectId: "lab6-a4744",
  storageBucket: "lab6-a4744.appspot.com",
  messagingSenderId: "131053455868",
  appId: "1:131053455868:web:dbfecea0554ba4b95eca79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router, // використовуйте роутер у додатку
}).$mount('#app');