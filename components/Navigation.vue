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
        <div class="navbar-start"></div>
        <div class="navbar-end">
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
  transform: translate(-12px,13px);

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

    &.expanded {
      background-color: $color-bg-dark;
      transition: background-color 0.5s ease-in-out;
      height: 100%;
    }
  }

  .navbar-end {
    padding-top: 40px;
    display: flex;
    flex-direction: column;

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

    a.navbar-item {
      font-family: $font-primary;
      text-align: center;
      font-size: 30px;

      @include breakpoint($sm) {
        font-size: 50px;
        text-align: right;
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
    }
  }

  .navbar-brand {
    nav {
      padding: 20px 0 0 20px;
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
      showMobileMenu: true
    }
  }
}
</script>