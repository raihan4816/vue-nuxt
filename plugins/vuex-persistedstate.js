import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: "nuxtpersisted",
    path: ["news"]
  })(store)
}
