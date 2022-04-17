<template>
  <v-app class="news-wrapper">
    <DetailNewsItem :news="detailNews" />
  </v-app>
</template>

<script>
export default {
  name: "DetailNewsPage",
  data() {
    return {
      data: {
        title: "test",
        value: "Kembali",
      },
    };
  },
  computed: {
    detailNews() {
      const detail = this.$store.state.news.lists.filter(
        (value) => value.title === this.$route.params.title
      );
      return detail[0];
    },
  },
  mounted() {},
  methods: {},
};
</script>
