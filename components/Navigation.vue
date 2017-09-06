<template>
  <div class="nav-container">
    <nav class="navbar is-transparent"
      v-bind:class="{ 'expanded': showMobileMenu }"
    >
      <div class="navbar-brand">
        <Logo />

        <div id="#nav-burger-trigger" class="navbar-burger"
          v-bind:class="{ 'is-active': showMobileMenu }"
          v-on:click="showMobileMenu = !showMobileMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu"
        v-bind:class="{ 'is-active': showMobileMenu }"
      >
        <div class="navbar-start"
          v-on:click="showMobileMenu = false"
        >
          <nuxt-link exact to="/" class="navbar-item">Inicio</nuxt-link>
          <nuxt-link to="/rufina" class="navbar-item">Rufina</nuxt-link>
          <nuxt-link to="/prata" class="navbar-item">Prata</nuxt-link>
        </div>
        <div class="navbar-end"
          v-on:click="showMobileMenu = false"
        >
          <nuxt-link exact to="/" class="navbar-item">Inicio</nuxt-link>
          <nuxt-link to="/rufina" class="navbar-item">Rufina</nuxt-link>
          <nuxt-link to="/prata" class="navbar-item">Prata</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@import '~assets/scss/base';

.navbar-burger {
  transform: translate(-10px,13px);

  @include breakpoint($bulma) {
    display: block;
  }

  span {
    width: 25px;
    margin-left: -12px;

    &:nth-child(1) {
      margin-top: -10px;
    }

    &:nth-child(3) {
      margin-top: 8px;
    }
  }

  &.is-active {
    span {      
      &:nth-child(1) {
        margin-top: -10px;
        margin-left: -7px;
      }

      &:nth-child(3) {
        margin-top: 8px;
        margin-left: -7px;
      }
    }
  }
}

.nav-container {
  height: 90px;

  .navbar {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 900;

    @include breakpoint($bulma) {
      display: flex;
      flex-direction: column;
    }

    &.expanded {
      background-color: $color-bg-dark;
      transition: background-color 0.2s ease-in-out;
      height: 100%;
    }
  }

  .navbar-burger {
    &.is-active {
      span {
        background-color: $color-bg-light;
      }
    }

    &:hover {
      background-color: inherit;

      span {
        background-color: $color-emphasis;
      }
    }
  }

  .navbar-menu {
    box-shadow: none;

    @include breakpoint($bulma) {
      padding: 0 40px;
    }

    a.navbar-item {
      font-family: $font-primary;
      text-align: center;
      font-size: 30px;

      @include breakpoint($sm) {
        font-size: 50px;
        text-align: right;
      }

      @include breakpoint($bulma) {
        display: block;
      }
    }

    &.is-active {
      a.navbar-item {
        color: $color-text-light;

        &:hover {
          background-color: transparent;
          color: $color-emphasis;
        }
      }

      @include breakpoint($bulma) {
        display: flex;
        flex-direction: column;
      }      
    }

    @include breakpoint($bulma) {
      display: none;
    }

    .navbar-start {
      padding-top: 20px;
      display: flex;
      flex-direction: column;

      @include breakpoint($bulma) {
        margin-right: 0;
        margin-left: auto;
      }
    }

    .navbar-end {
      flex-direction: row;
      flex: 1;
      align-items: center;

      a.navbar-item {
        font-size: 25px;
      }
    }
  }

  .navbar-brand {
    nav {
      padding: 20px 0 0 20px;
    }

    @include breakpoint($bulma) {
      padding: 20px 30px;
    }
  }
}

</style>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      showMobileMenu: false
    }
  }
}
</script>