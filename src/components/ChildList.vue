<template>
    <div>
      <h2>Список дітей</h2>
      <ul>
        <li v-for="child in filteredChildren" :key="child.id">
          {{ child.lastName }}, {{ child.firstName }} - {{ child.group }}
          <button @click="deleteChild(child.id)">Вилучити</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      children: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        filter: "",
      };
    },
    computed: {
      filteredChildren() {
        const filterLowerCase = this.filter.toLowerCase();
        return this.children.filter(
          (child) =>
            child.lastName.toLowerCase().includes(filterLowerCase) ||
            child.firstName.toLowerCase().includes(filterLowerCase)
        );
      },
    },
    methods: {
      deleteChild(childId) {
        this.$emit("child-deleted", childId);
      },
    },
  };
  </script>
  