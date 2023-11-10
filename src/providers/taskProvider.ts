import TaskRepositoryPlugin from '@/plugins/TaskRepository';

export default {
  install(Vue) {
    Vue.use(TaskRepositoryPlugin);
  },
};