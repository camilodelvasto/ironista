<template>
    <nav>
      <nuxt-link exact to="/" class="logo">
        <span class="logo-type">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="100%" viewBox="0 0 607 237" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
          <rect x="0" y="0" width="236.22" height="236.22" style="fill:#fff333;" class="yellow-box" />
          <text class="logo-text" x="252.143px" y="183.232px" style="font-family:'GlacialIndifference-Regular', 'Glacial Indifference';font-size:57.083px;">I<tspan x="283.539px 333.429px 397.306px 450.507px 481.903px 533.507px 572.209px " y="183.232px 183.232px 183.232px 183.232px 183.232px 183.232px 183.232px ">RONISTA</tspan></text>
          <text class="logo-text" x="254.242px" y="219.918px" style="font-family:'GlacialIndifference-Regular', 'Glacial Indifference';font-size:20.417px;">L<tspan x="269.616px 289.257px 307.305px 330.458px 348.608px 366.371px 382.398px 405.55px 423.701px 435.236px 458.389px 470.945px 492.872px 512.717px 525.274px 541.301px 561.146px 579.296px 598.937px " y="219.918px 219.918px 219.918px 219.918px 219.918px 219.918px 219.918px 219.918px 219.918px 219.918px 219.918px 219.918px 219.918px 219.918px 219.918px 219.918px 219.918px 219.918px 219.918px ">ABORATORIO CULTURAL</tspan></text><clipPath id="_clip1"><rect x="16.724" y="18.143" width="202.78" height="202.78"/></clipPath><g clip-path="url(#_clip1)">
          <path class="logo-symbol" d="M81.613,70.866c-4.15,0 -7.097,3.01 -7.097,7.351c0,5.149 4.056,11.517 10.266,16.222c5.307,4.024 14.685,8.872 29.276,8.872c20.437,0 29.134,-3.39 35.487,-5.83c3.517,-1.347 6.099,-2.281 9.758,-2.281c9.886,0 27.661,6.21 31.178,28.389l24.967,0c1.173,0 2.345,0.19 3.422,0.507c-3.77,-34.425 -24.793,-53.23 -60.2,-53.23l-77.057,0Zm52.089,44.612c-5.18,0 -9.616,3.517 -11.026,8.238c1.22,-0.048 2.456,-0.127 3.676,-0.127l39.795,0c-1.457,-4.658 -5.766,-8.111 -10.899,-8.111l-21.546,0Zm-7.35,16.222c-35.408,0 -65.904,19.502 -94.8,60.834l187.952,0l0,-56.778c0,-2.25 -1.806,-4.056 -4.056,-4.056l-89.096,0Zm-12.294,28.389c4.483,0 8.111,3.628 8.111,8.112c0,4.483 -3.628,8.111 -8.111,8.111c-4.483,0 -8.111,-3.628 -8.111,-8.111c0,-4.484 3.628,-8.112 8.111,-8.112Zm28.389,0c4.484,0 8.112,3.628 8.112,8.112c0,4.483 -3.628,8.111 -8.112,8.111c-4.483,0 -8.111,-3.628 -8.111,-8.111c0,-4.484 3.628,-8.112 8.111,-8.112Zm28.39,0c4.483,0 8.111,3.628 8.111,8.112c0,4.483 -3.628,8.111 -8.111,8.111c-4.484,0 -8.112,-3.628 -8.112,-8.111c0,-4.484 3.628,-8.112 8.112,-8.112Zm-144.735,40.556c-2.946,4.515 -5.956,9.205 -8.871,14.195c-0.048,0.079 0.047,0.174 0,0.254c-0.127,0.237 -0.175,0.491 -0.254,0.76c-0.079,0.269 -0.238,0.491 -0.253,0.76c-0.016,0.095 0,0.175 0,0.254c0,0.174 0.111,0.348 0.126,0.507c0.032,0.285 0.032,0.491 0.127,0.76c0.079,0.254 0.254,0.539 0.38,0.761c0.127,0.221 0.206,0.427 0.381,0.633c0.19,0.222 0.411,0.333 0.633,0.507c0.127,0.095 0.238,0.301 0.38,0.381c0.096,0.063 0.159,0.079 0.254,0.126c0.111,0.064 0.269,0.079 0.38,0.127c0.46,0.174 0.935,0.253 1.394,0.253l190.614,0c4.467,0 8.111,-3.643 8.111,-8.111l0,-12.167l-193.402,0Z" style="fill-rule:nonzero;"/></g><clipPath id="_clip2"><rect x="16.724" y="18.143" width="202.78" height="202.78"/></clipPath>
          </svg>
        </span>
      </nuxt-link>
    </nav>
  </v-layout>
</template>

<script>
</script>

<style scoped lang="scss">
@import '~assets/scss/base';

  .logo-text {
    transition: all 0.2s ease-in-out;
  }

  .scrolled {
    .yellow-box,
    .logo-symbol {
      transform: scale(0.5);
      transition: all 0.2s ease-in-out;
    }

    .logo-text {
      opacity: 0;
      transform: translate(-122px, -110px);
    }
  }

</style>
