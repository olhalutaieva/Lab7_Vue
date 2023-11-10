
import { Task } from '@/types';

export class LocalTaskRepository {
  private tasks: Task[] = [];

  createTask(text: string): Task {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.tasks.push(newTask);
    this.saveTasks();
    return newTask;
  }

  getTasks(): Task[] {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    return this.tasks;
  }

  updateTask(task: Task): Task {
    const existingTask = this.tasks.find((t) => t.id === task.id);
    if (existingTask) {
      Object.assign(existingTask, task);
      this.saveTasks();
      return existingTask;
    }
    return task;
  }

  deleteTask(task: Task): void {
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.saveTasks();
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
