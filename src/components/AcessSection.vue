<template>
    <section id="access" class="access">
      <div class="hold">
        <h1 class="access_title">Get early access today</h1>
        <p class="access_description">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you
        </p>
  
        <form class="form" @submit.prevent="submitForm">
          <div class="form_field">
            <input v-model="email" class="form_input" type="text" placeholder="email@example.com" />
            <p class="form_info" v-show="!isEmailValid">Please enter a valid email address</p>
          </div>
          <button class="form_btn" type="submit">Get Started For Free</button>
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
  .access {
  width: 70%;
  margin: 0 auto;
  background-color: #181f2a;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
          box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  -webkit-transform: translateY(8rem);
          transform: translateY(8rem);
}

.access .hold {
  padding: 3rem;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.access_title {
  font-size: 2rem;
  font-weight: 600;
}

.access_description {
  margin: 1rem 0;
  opacity: 0.75;
}

.access .form {
  width: 100%;
  margin-top: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.access .form_field {
  width: 100%;
  position: relative;
}

.access .form_input {
  width: 100%;
  padding: 0.9rem 2rem;
  border: none;
  border-radius: 2rem;
}

.access .form_info {
  font-size: 0.75rem;
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 2rem;
  color: #ff4242;
}

.access .form_btn {
  margin-left: 2rem;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none;
  background-color: #339ecc;
  border: none;
  border-radius: 2rem;
}

.access .form_btn:hover {
  background-color: #65e2d9;
}

@media (max-width: 910px) {
  .access .form {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .access .form_btn {
    margin: 0;
    margin-top: 2rem;
  }
}

@media (max-width: 700px) {
  .access {
    width: 90%;
  }
  .access_title {
    font-size: 1.5rem;
  }
  .access_description {
    font-size: 0.9rem;
  }
  .access .form_info {
    font-size: 0.7rem;
  }
  .access .form_btn {
    font-size: 1rem;
  }
}
  </style>
  