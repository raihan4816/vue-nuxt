export const state = () => ({
    lists: [],
    totalResults: 0,
  })
  
export const mutations = {
    setNews(state, param) {
      state.lists = param.articles;
      state.totalResults = param.totalResults;
    }
  }
  
export const actions = {
    fetchNews(store) {
      this.$axios
        .get(
          `https://newsapi.org/v2/everything?q=apple&from=2022-04-10&to=2022-04-10&sortBy=popularity&apiKey=5c8d720863304982bda9d0deaed457ba`
        )
        .then((response) => {
          store.commit("setNews", response.data);
        })
        .catch((error) => {
          store.commit("setError", error.msg);
        });
    },
  }
  