<template>
    <div class="header-container" id="uw-bar">
      <div class="header-content">
        <a id="uw-madison-link" href="https://wisc.edu">
            University <span class="lowercase-text">of</span> Wisconsin-Madison
        </a>
        <nav id="uw-madison-header-nav">
          <ul>
            <li>
              <a>Departments</a>
            </li>
            <li>
              <a>Centers</a>
            </li>
            <li>
              <a>Alumni</a>
            </li>
            <li>
              <a>Administrative</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

</template>


<script>
export default {
  name: 'BaseUWBar',
  props: {
  }
}
</script>


<style lang="scss">

  @import "../assets/style-variables.scss";

  #uw-bar {
    background-color: $badger-red;
    color: $white;
    text-transform: uppercase;
    font-size: .8rem;
  }

  #uw-madison-link {
    color: $white;
    margin-right: 25px;
  }

  #uw-madison-link:hover {
    text-decoration: none;
  }

  /* UW Bar Nav */

  #uw-madison-header-nav {
    margin-left: auto;
    font-family: Verlag-Book;
  }

  #uw-madison-header-nav ul{
    padding: 0;
  }

  #uw-madison-header-nav a {
    color: $white;
    font-size: .8rem;
  }


</style>