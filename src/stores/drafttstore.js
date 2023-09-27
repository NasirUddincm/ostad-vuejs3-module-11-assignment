import { defineStore } from 'pinia';
import {reactive} from 'vue';

export const useTodoStore = defineStore('todo',()=>{
  const tasks = reactive([]);
  function addTask(taskName) {
    tasks.push({ name: taskName, done: false }); 
  }
  function removeTask(taskIndex) {
    tasks.splice(taskIndex, 1);
  }
  function toggleTaskStatus(taskIndex) {
    tasks[taskIndex].done = !tasks[taskIndex].done;
  }
  return {
    tasks, addTask, removeTask, toggleTaskStatus
  }
})