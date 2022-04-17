<template>
  <v-app light>
    <v-app-bar :clipped-left="clipped" fixed app color="#2e495e">
      <img src="icon.png" width="3%" class="ml-5"/>
      <v-toolbar-title class="white--text ml-5" v-text="title"/>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'News Build With Vuetify & Nuxt',
    }
  },
}
</script>
