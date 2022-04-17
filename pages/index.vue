<template>
  <v-app class="home">
    <HomeNews v-for="(data, index) in news" :key="index.id" :news="data"/>
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
  news() {
      return this.$store.state.news.lists;
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch("news/fetchNews");
    },
  },
};
</script>
