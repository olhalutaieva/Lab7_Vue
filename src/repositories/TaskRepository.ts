import { Task } from '@/types';

export interface TaskRepository {
  createTask(text: string): Task;
  getTasks(): Task[];
  updateTask(task: Task): Task;
  deleteTask(task: Task): void;
}