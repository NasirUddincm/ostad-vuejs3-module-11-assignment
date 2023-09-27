<template>
    
    <div class="row justify-content-md-center">
        <div class="col col-lg-7">
            <div class="card">
                <div class="card-header">
                  <div class="hstack gap-3">
                    Welcome to Home Page                    
                    <RouterLink to="/" class="btn btn-success ms-auto">
                      Home
                    </RouterLink>
                  </div>
                </div>
                <div class="card-body">
                  <h1>Todo App</h1>
                  <form @submit.prevent="addTask">
                      <div class="mb-3">
                          <label for="item" class="form-label">Add Task</label>
                          <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" id="item" class="form-control"/>
                      </div>
                     
                      <div class="hstack gap-3">
                          <button type="submit" class="btn btn-primary">
                            Add Task
                          </button>
                          
                      </div>
                  </form>
                  <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th width="80%">Name</th>
                            <th width="20%">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(task, index) in tasks" :key="index">
                          <td>
                            <label :class="{ done: task.done }" id="done">
                                <input type="checkbox" :checked="task.done" @change="toggleTaskStatus(index)" class="me-2" id="done"/> 
                             {{ task.name }}
                            </label>
                          </td>
                            <td>
                                <button @click="removeTask(index)"
                                    class="btn btn-danger btn-sm">
                                    Remove
                                </button>
                            </td>
                        </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useTodoStore } from '../stores/store';
  import {RouterLink} from 'vue-router'
  const todoStore = useTodoStore();
  
  const newTask = ref('');
  const tasks = computed(() => todoStore.tasks);
  
  function addTask() {
    if (newTask.value.trim() !== '') {
      todoStore.addTask(newTask.value);
      newTask.value = '';
    }
  }
  
  function removeTask(index) {
    todoStore.removeTask(index);
  }
  
  function toggleTaskStatus(index) {
    todoStore.toggleTaskStatus(index);
  }
  </script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
  