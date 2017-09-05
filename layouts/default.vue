<template>
  <v-app>
    <v-navigation-drawer
      class="pb-0"
      persistent
      absolute
      right
      height="100%"
      enable-resize-watcher
      v-model="drawer"
    >
      <Navigation />
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-tile v-for="item in items2" :key="item.text" avatar @click="">
            <v-list-tile-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile class="mt-3" @click="">
          <v-list-tile-action>
            <v-icon class="grey--text text--darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon class="grey--text text--darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar class="red">
      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-icon class="ml-3">fa-youtube</v-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <main>
      <v-container>
        <v-layout>
          <v-flex xs12>
            <nuxt/>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
    <v-footer class="indigo">
      <span class="white--text">© 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from '~components/Navigation.vue'
import Logo from '~components/Logo.vue'

export default {
  components: {
    Navigation
  },

  data: () => ({
    drawer: true,
    items: [
      { icon: 'trending_up', text: 'Most Popular' }
    ],
    items2: [
      { picture: 78, text: 'MKBHD' },
    ]
  })
}
</script>

<style>
</style>