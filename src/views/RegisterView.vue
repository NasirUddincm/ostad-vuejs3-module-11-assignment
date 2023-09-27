<template>   
    <div class="row justify-content-md-center mt-5">
        <div class="col col-lg-4 mt-5">
            <div class="card">
                <div class="card-header">Register</div>
                <div class="card-body">
                    <form @submit.prevent="register">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" v-model="email" class="form-control" placeholder="Email" id="email">                            
                            <p class="text-danger">{{ errorMessage }}</p>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" v-model="password" class="form-control" placeholder="Password" id="password">
                        </div>                        
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input v-model="confirmPassword" placeholder="Confirm Password" class="form-control" type="password">
                        </div>                        

                        <div class="hstack gap-3">
                            <button type="submit" class="btn btn-primary">Register</button>
                            <RouterLink to="/login" class="ms-auto">Login Account</RouterLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
  import {ref} from 'vue';
  import { useAuthStore } from '../stores/auth';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const router = useRouter();
  const errorMessage = ref('');
  const register = () => {    
    if(password.value == '' || email.value == ''){
      errorMessage.value = 'Please Enter email and password';
      return false
    }
    if (password.value === confirmPassword.value) {
      useAuthStore().register(email.value, password.value);
      router.push('/login');
    }else{
      errorMessage.value = 'Confirm Passwords do not match';
    }
  };
</script>
  