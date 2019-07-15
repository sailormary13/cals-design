<template>
  <div class="header-container" id="header-main-nav-container">
    <div class="header-content">
      <nav>
        <ul>
          <li>
            <a>Academics</a>
          </li>
          <li>
            <a>Research</a>
          </li>
          <li>
            <a>Outreach</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>


<script>
export default {
  name: 'BaseNavigationBar',
  props: {
  }
}
</script>


<style lang="scss">

    @import "../assets/style-variables.scss";


  #header-main-nav-container {
    background-color: $light-gray;
    border-top: 1px solid $medium-gray;
    border-bottom: 1px solid $medium-gray;
  }


  nav {
    font-size: 1.1rem;
    font-family: Verlag-Black;
  }

  nav ul {
    margin: 0;
    padding: .2rem 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
  }

  nav ul li {
    display: inline;
    margin: 0;
    padding: 0;
    margin-right: 1.8rem;
  }

  nav ul li:last-child {
  margin-right: 0;
  }

  nav a {
    color: $badger-red;
    text-transform: uppercase;
  }


</style>