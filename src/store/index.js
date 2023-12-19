import { createStore } from 'vuex';

const state = {
  children: [],
  filter: '',
};

const mutations = {
  createChild(state, child) {
    state.children.push(child);
  },
  deleteChild(state, childId) {
    state.children = state.children.filter(child => child.id !== childId);
  },
  setFilter(state, filter) {
    state.filter = filter;
  },
};

const getters = {
  filteredChildren: state => (
    state.filter
      ? state.children.filter(child => child.name.toLowerCase().includes(state.filter.toLowerCase()))
      : state.children
  ),
};

export default createStore({
  state,
  mutations,
  getters,
});
