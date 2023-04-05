import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import fetchDataEndpoint from '../constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataFromApi: null,
    visits: [],
  },
  mutations: {
    SET_DATA_FROM_API(state, data) {
      state.dataFromApi = data;
    },
    UPDATE_ARTICLE_TITLE(state, { articleId, newTitle }) {
      const article = state.dataFromApi.articles[articleId];

      if (article) {
        article.title = newTitle;
      }
    },
    PUSH_VISITED(state, { title, ind }) {
      const now = new Date();
      state.visits.push({ title, ind, time: now });
    },
  },
  actions: {
    fetchDataFromApi({ commit }) {
      axios
        .get(
          fetchDataEndpoint,
        )
        .then((response) => {
          commit('SET_DATA_FROM_API', response.data);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error('Error fetching data:', error);
        });
    },
  },
  getters: {
    dataFromApi: state => state.dataFromApi,
    visits: state => state.visits.reverse(),
    articleById: state => (id) => {
      if (state.dataFromApi && state.dataFromApi.articles) {
        return state.dataFromApi.articles[id];
      }
      return null;
    },
  },
});
