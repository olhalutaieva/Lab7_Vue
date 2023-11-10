<template>
  <div>
    <h1>Vue.js Task List</h1>
    <TaskList />
  </div>
</template>

<script>
import TaskList from '@/views/TaskList.vue';

export default {
  components: {
    TaskList,
  },
};
</script>