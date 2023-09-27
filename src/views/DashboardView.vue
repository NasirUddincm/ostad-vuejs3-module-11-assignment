<template>
 
  <div class="row justify-content-md-center mt-5">
        <div class="col col-lg-8">
            <div class="card">
                <div class="card-header">
                  <div class="hstack gap-3">
                    Welcome to Home Page                    
                    <button @click="logout" class="btn btn-danger ms-auto">Logout</button>
                  </div>
                  
                </div>
                <div class="card-body">
                  <h1>Welcome, {{ currentUser.email }}</h1>
                    <RouterLink to="/todos" class="btn btn-success">TodoApp</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template> 

<script setup>
import { useAuthStore } from '../stores/auth';
import { useRouter, RouterLink } from 'vue-router';

const authStore = useAuthStore();
const currentUser = authStore.currentUser;

const router = useRouter();
const logout = () => {
    useAuthStore().logout();
    router.push('/login');
};
</script>
