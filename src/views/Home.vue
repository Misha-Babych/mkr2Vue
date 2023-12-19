<template>
    <div>
      <h2>Головна сторінка</h2>
      <ul>
        <li v-for="child in children" :key="child.id">
          {{ child.lastName }}, {{ child.firstName }} - {{ child.group }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    name: "HomeView",
    computed: {
      ...mapState(["children"]),
    },
  };
  </script>
  