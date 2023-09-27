<template>
    <div class="row justify-content-md-center mt-5">
        <div class="col col-lg-4 mt-5">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <form @submit.prevent="login">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" v-model="email" class="form-control" id="email" placeholder="Email">                            
                            <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                        </div>    
                        
                        <div class="hstack gap-3">
                            <button type="submit" class="btn btn-primary">Login</button>
                            <RouterLink to="/register" class="ms-auto">Register New Account</RouterLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue'
  import { useAuthStore } from '../stores/auth';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const email = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const login = () => {
    const result = useAuthStore().login(email.value, password.value);
    if (result === 'success') {
        errorMessage.value = ''; 
    } else {
        errorMessage.value = 'Invalid email or password'; 
    }
    router.push('/');
  };
</script>
  