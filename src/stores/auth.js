import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', {
  state: () => ({
    users: [],
    currentUser: null,
  }),
  actions: {
    register(email, password) {
      // Check for valid email format
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        return;
      }
      // Check if the email is already registered
      if (this.users.some(user => user.email === email)) {
        return;
      }
      // If everything is valid, add the user to the store
      this.users.push({ email, password });
    },
    login(email, password) {
      const user = this.users.find(user => user.email === email);

      // Check if the user exists and the password is correct
      if (user && user.password === password) {
        this.currentUser = user;
      } else {
        // Handle login failed error
      }
    },
    logout() {
      this.currentUser = null;
    },
  },
});
