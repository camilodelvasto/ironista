<template>
  <v-layout v-scroll="onScroll">
    <div class="nav-container" v-bind:class="{ scrolled: offsetTop > 40 }">
      <div class="header">
        <Logo />
        <nav>
          <div class="title">
            <nuxt-link to="/rufina">Rufina</nuxt-link>
            <nuxt-link to="/prata">Prata</nuxt-link>
            <nuxt-link exact to="/">Inicio</nuxt-link>
          </div>
        </nav>

        <div class="bottom-side-anchor"><span class="mid"></span></div>
      </div>
              {{ offsetTop }}
    </div>
  </v-layout>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  },

  data: () => ({
    offsetTop: 0
  }),

  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~assets/scss/base';

  .nav-container {
    height: 100px;
    width: 100%;
    transition: all 0.2s ease-in-out;

    &.scrolled {
      height: 40px;
    }
  }

  .header {
    position: fixed;
    background: $color-bg-0;
    transition: all 0.2s ease-in-out;
  }

</style>