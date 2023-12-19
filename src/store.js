
import { createStore } from 'vuex';
const store = createStore({
  state: {
    surname: '',
  },
  mutations: {
    setSurname(state, payload) {
      state.surname = payload;
    },
  },
});

export default store;
