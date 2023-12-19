<template>
  <div>
    <h2>Створення нового запису</h2>
    <child-form @child-saved="saveChild" />
  </div>
</template>

<script>
import ChildForm from "@/components/ChildForm.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    ChildForm,
  },
  methods: {
    ...mapMutations(["saveChild"]),
  },
};
</script>
