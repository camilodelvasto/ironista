<template>
  <div>
    <nuxt-link exact to="/" class="logo">
      <span class="logo-type">IROΠISTA</span>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 129.847 129.847" style="enable-background:new 0 0 129.847 129.847;" xml:space="preserve" aria-labelledby="title" role="presentation">
        <title id="title" lang="en">Ironista Logo</title>
        <g>
          <g>
            <path style="fill:#F77C9F;" d="M100.321,66.763c-5.837-8.055,3.612-16.674,3.612-16.674C91.705,26.467,54.467,2.65,54.467,2.65
              C32.235,29.41,23.619,114.845,23.619,114.845c15.006,1.109,9.726,15.002,9.726,15.002h58.36l13.617-61.695L100.321,66.763z
               M84.271,83.997c-4.17,10.42,0,29.178,0,29.178c-22.72,5.838-26.262-13.549-25.75-22.926c0.514-9.379,11.577-23.346,19.496-23.137
              C85.937,67.322,88.439,73.574,84.271,83.997z"/>
            <path style="fill:#EF3F7A;" d="M40.294,122.07c-5.003-54.748,21.6-114.32,21.6-114.32l0,0c-4.491-3.221-7.427-5.1-7.427-5.1
              C32.235,29.41,23.619,114.845,23.619,114.845c15.006,1.109,9.726,15.002,9.726,15.002h58.36l1.717-7.777
              C81.522,124.572,40.294,122.07,40.294,122.07z"/>
            <path style="fill:#EF3F7A;" d="M103.933,50.089c0,0-9.449,8.619-3.612,16.674c0.522-9.518,5.002-11.842,5.002-11.842
              C106.053,52.21,103.933,50.089,103.933,50.089z"/>
            <path style="fill:#4F4F4D;" d="M105.322,54.921l3.855,1.457c0,0,2.192,7.188-3.855,11.773l-5.002-1.389
              C100.321,66.763,100.218,57.835,105.322,54.921z"/>
          </g>
          <path style="fill:#4F4F4D;" d="M52.359,5.417c0,0-1.594-5.417-3.705-5.417c-2.11,0-22.025,33.903-28.372,114.427l3.337-1.67
            C23.619,112.757,36.082,24.801,52.359,5.417z"/>
        </g>
      </svg>
    </nuxt-link>
    <nav>
      <div class="title">
        <nuxt-link to="/rufina">Rufina</nuxt-link>
        <nuxt-link to="/prata">Prata</nuxt-link>
        <nuxt-link exact to="/">Inicio</nuxt-link>
      </div>
    </nav>

    <div class="bottom-side-anchor"><span class="mid"></span></div>
  </div>
</template>

<style scoped lang="sass">
  nav
    width: 50px
    background: #f0f0f0
    height: 100vh
    position: fixed
    left: 0
    z-index: 3000

  .title
    font-weight: bold
    text-transform: uppercase
    letter-spacing: 0.03em
    -ms-transform: rotate(180deg)
    -webkit-transform: rotate(180deg)
    transform: rotate(180deg)
    font-size: 20px
    color: white
    z-index: 6000
    margin-left: 17px
    writing-mode: vertical-rl
    font-family: "Josefin Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif


  @media screen and (max-width: 800px)
    nav
      width: 40px 

    .title
      margin-left: 13px


  .title a, .title a:hover
    color: rgba(0, 0, 0, 0.8)
    margin: 60px 0px

  .title a.nuxt-link-active
    color: #F15A53
    transition: 0.2s color ease

  .logo
    position: fixed
    top: 10px 
    right: 30px
    font-size: 30px 
    color: white
    text-decoration: none
    transition: 0.2s opacity ease
    z-index: 5000
    cursor: pointer
    padding-bottom: 10px
    border-bottom: 1px solid rgba(255, 255, 255, 0.2)

    svg
      height: 30px

    .logo-type
      align-self: center
      font-size: 25px
      letter-spacing: 0.2em
      padding-right: 5px
      text-transform: uppercase
      font-family: "Josefin Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif

  .logo:hover
    opacity: 0.8
    transition: 0.25s opacity ease

  .dot-nav
    width: 40px
    position: absolute
    left: 10px
    bottom: 0
    z-index: 5000

  .bottom-side-anchor
    position: absolute
    right: -50px
    bottom: 100px
    width: 200px
    height: 10px
    border-bottom: 1px solid rgba(255, 255, 255, 0.5)
    -webkit-transform: rotate(-90deg)
    -ms-transform: rotate(-90deg)
    transform: rotate(-90deg)
    z-index: 5000
    color: color
    font-weight: bold
    font-family: 'Cardo', serif

  .nuxt-link-active
    transition: 0.2s color ease
</style>
