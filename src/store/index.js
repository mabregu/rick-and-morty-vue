import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFiltered: [],
  },
  getters: {
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharactersFiltered(state, payload) {
      state.charactersFiltered = payload;
    }
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();
        commit('setCharacters', data.results);
        commit('setCharactersFiltered', data.results);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
