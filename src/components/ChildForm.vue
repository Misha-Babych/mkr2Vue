<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="lastName">Прізвище:</label>
        <input v-model="child.lastName" type="text" id="lastName" required />
      </div>
      <button type="submit">Зберегти</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        child: {
          lastName: "",
        },
      };
    },
    methods: {
      submitForm() {
        this.$emit("child-saved", { ...this.child });
        this.resetForm();
      },
      resetForm() {
        this.child = {
          lastName: "",
        };
      },
    },
  };
  </script>
  