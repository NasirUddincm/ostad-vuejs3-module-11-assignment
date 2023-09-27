import { defineStore } from 'pinia';
import {ref, reactive} from 'vue';

export const useAuthStore = defineStore('auth',() => {
     
    const users = reactive([]);
    const currentUser = ref(null);

    function register(email, password) {
      // Check for valid email format
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        return;
      }
      // Check if the email is already registered
      if (users.some(user => user.email === email)) {
        return;
      }
      // If everything is valid, add the user to the store
      users.push({ email, password });
    }
    function login(email, password) {
      const user = users.find(user => user.email === email);

      // Check if the user exists and the password is correct
      if (user && user.password === password) {
        currentUser.value = user;
      } else {
        // Handle login failed error
      }
    }
    function logout() {
      currentUser.value = null;
    }

    return {
        users,
        currentUser,
        register,
        login,
        logout
    }

})