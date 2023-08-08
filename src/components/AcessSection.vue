<template>
    <section class="access">
      <div class="hold">
        <h1 class="accessTitle">Get early access today</h1>
        <p class="accessDescription">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you
        </p>
  
        <form class="form" @submit.prevent="submitForm">
          <div class="formField">
            <input v-model="email" class="formInput" type="text" placeholder="email@example.com" />
            <p class="formHelpX" v-show="!isEmailValid">Please enter a valid email address</p>
          </div>
          <button class="formBtn" type="submit">Get Started For Free</button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AccessSection',
    data() {
      return {
        email: '',
        isEmailValid: true
      };
    },
    methods: {
      submitForm() {
        // You can implement form submission logic here
        if (this.isValidEmail(this.email)) {
          // Handle successful form submission
          this.isEmailValid = true;
          console.log('Form submitted with email:', this.email);
        } else {
          this.isEmailValid = false;
        }
      },
      isValidEmail(email) {
        // Add your email validation logic here
        // For a simple example, we'll check if email contains '@'
        return email.includes('@');
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  