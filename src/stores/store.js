import { defineStore } from 'pinia';
export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(taskName) {
      this.tasks.push({ name: taskName, done: false }); 
    },
    removeTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    },
    toggleTaskStatus(taskIndex) {
      this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
    },
  },
});

