<template>
    <div>
      <h1>Про автора</h1>
      <p>Аутентифікований: {{ isAuthenticated }}</p>
      <p>Ім'я автора: {{ authorName }}</p>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['authorName', 'isAuthenticated']), // Використовуйте mapState для отримання стану зі сховища
    },
  };
  </script>