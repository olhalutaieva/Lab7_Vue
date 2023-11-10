import { LocalTaskRepository } from '@/repositories/LocalTaskRepository';

export default {
  install(Vue) {
    const repository = new LocalTaskRepository();
    Vue.prototype.$taskRepository = repository;
  },
};