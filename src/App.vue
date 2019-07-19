
<template>
  <div id="root">

    <div id="mobile-nav-overlay" v-bind:class="{bgOverlay: isDisplayed }"></div>

    <header id="header-app">
      <div id="app-header-content">
        <div id="menuIcon" v-on:click="displayNav(isDisplayed)">
          <div class="hamburgerBar"></div>
          <div class="hamburgerBar"></div>
          <div class="hamburgerBar"></div>
        </div>
        <div id="app-title">CALS Design System</div>
      </div>
    </header>

    <div id="hide-nav-cta" style="font-size: .8rem;" 
      v-bind:class="{displayNone: isHidden }"
      v-on:click="hideNav()">
      <a><< Hide Navigation</a>
    </div>
    <div id="show-nav-cta" style="font-size: .8rem;" 
      v-bind:class="{displayBlock: isHidden }"
      v-on:click="hideNav()">
      <a>Show Navigation >></a>
    </div>

    <div id="nav-main-grid" v-bind:class="{displayBlock: isHidden}">
      <nav class="nav-app" v-bind:class="{mobileNav: isDisplayed, hiddenNav: isHidden}">
        <div id="close-nav-icon">
          <a
            v-bind:class="{mobileNav: isDisplayed }"
            v-on:click="displayNav()">
            X
          </a>
        </div>

        <ul>
          <li><router-link to="/purpose">Purpose</router-link></li>
          <li><router-link to="/principles">Principles</router-link></li>
          <li><router-link to="/logos">Logos</router-link></li>
          <li><router-link to="/Color">Color</router-link></li>
          <li><router-link to="/typography">Typography</router-link></li>
          <li><router-link to="/layout">Layout</router-link></li>
          <li><router-link to="/header">Header</router-link></li>
          <li><router-link to="/colorblocks">Color Blocks</router-link></li>
          <li><router-link to="/buttons">Buttons</router-link></li>
          <li><router-link to="/cards">Cards</router-link></li>
          <li><router-link to="/newsfeed">News Feed</router-link></li>
          <li><router-link to="/eventsfeed">Events Feed</router-link></li>
          <li><router-link to="/images">Images</router-link></li>
          <li><router-link to="/forms">Forms</router-link></li>
          <li><router-link to="/test">Test</router-link></li>
        </ul>
      </nav>

      <main>
        <router-view></router-view>
      </main>

    </div>
  </div>
</template>

<style lang="scss" scoped>

  @import "./assets/style-variables.scss";

/************** App Navigation *******************/

.nav-app {
    padding: 0 2.5rem 0 3rem;
    font-family: Verlag-Book;
    font-size: 1em;
}

.nav-app ul {
    list-style-type: none;
    padding: 0;
    display: block;
}

.nav-app ul li {
    list-style-type: none;
    padding: 0;
    display: list-item;
    margin: 15px 0px;
}

.nav-app a {
    color: $blue;
    text-transform: none;
}

@media only screen and (min-width: 768px) {
    .nav-app {
        border-right: 1px solid $medium-gray;
        display: inline;
    }
}

/* Slider nav for small screen sizes */
@media only screen and (max-width: 767.9px) {
    .nav-app {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        background-color: $light-gray;
        overflow-x: hidden;
        padding: 1rem 1.2rem 2rem 1.8rem;
        visibility: hidden;
        opacity: 0;
        transition: all 0.8s;
    }
}

/* When user hits Hide Nav CTA */
@media only screen and (min-width: 768px) {
  .hiddenNav {
    display: none !important;
  }
}

/* When user hits hamburger icon */
.mobileNav {
  visibility: visible !important;
  opacity: 1 !important;
  width: 200px !important;
  transition: all 0.5s;
}

#close-nav-icon {
  text-align: right;
  font-weight: bold;
  font-size: 1.4rem;
}

#close-nav-icon a {
  color: $badger-red;
}

.hamburgerBar {
  width: 32px;
  height: 4px;
  background-color: $badger-red;
  margin: 6px 0;
}

#menuIcon {
  cursor: pointer;
  display: inline-block;
}

@media only screen and (min-width: 768px) {
    #menuIcon, .hamburgerBar, #close-nav-icon {
        display: none;
    }
}

/* App Header */
#header-app {
    padding: 2.4rem 0rem 3.4rem 1.8rem;
}

@media only screen and (min-width: 768px) {
  #header-app {
    padding: 3rem 3rem 2.4rem 3rem;
  }
}

#app-header-content {
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-gap: 1.2rem;
    align-items: center;
}

@media only screen and (min-width: 768px) {
    #app-header-content {
        display: block;
    }
}

#hide-nav-cta, #show-nav-cta {
  display: none;
  padding-left: 3rem;
}

@media only screen and (min-width: 768px) {
  #hide-nav-cta {
  display: block;
  }
}

@media only screen and (max-width: 768px) {
  #show-nav-cta {
  display: none !important;
  }
}

/* Handy display classes */
.displayNone {
  display: none !important;
}

.displayBlock {
  display: block !important;
}

/* Dark overlay when mobile menu displayed */
.bgOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0,0,0,0.8);
}

@media only screen and (min-width: 768px) {
  .bgOverlay {
    display: none;
  }
}


</style>

<script>

export default {
  name: 'app'
  , data: function() {
    return {
      isDisplayed: false,
      isHidden: false
    }
  }
  , methods: {
    displayNav: function() {
      this.isDisplayed = !this.isDisplayed;
    }
    , hideNav: function() {
      this.isHidden = !this.isHidden;

    }
  }
}

</script>
