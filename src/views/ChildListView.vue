<template>
  <div>
    <h1>Child List Page</h1>
    <input v-model="filter" placeholder="Фільтр за ім'ям" />
    <div v-for="child in filteredChildren" :key="child.id">
      {{ child.name }} - {{ child.age }} years old
      <button @click="deleteChild(child.id)">Delete</button>
    </div>
    <router-link to="/">
      <button>Go to Home</button>
    </router-link>
    <router-link to="/child-form">
      <button>Go to Child Form</button>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    filteredChildren() {
      return this.$store.getters.filteredChildren;
    },
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.commit('setFilter', value);
      },
    },
  },
  methods: {
    deleteChild(childId) {
      this.$store.commit('deleteChild', childId);
    },
  },
};
</script>
