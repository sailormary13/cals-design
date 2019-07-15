<template>
    <div class="header-container" id="site-name-bar">
            <div class="header-content">
              <div>
                <span class="text-above">College of</span><br>
                <span id="site-name-bar-name-text">Agricultural and Life Sciences</span>
              </div>
            </div>
          </div>
</template>


<script>
export default {
  name: 'BaseSiteNameBar',
  props: {
  }
}
</script>


<style lang="scss">

    @import "../assets/style-variables.scss";

  #site-name-bar {
    background-color: $light-gray;
    padding-top: .8rem;
    padding-bottom: 1.3rem;
  }

  #site-name-bar-name-text {
    font-size: 2.2rem;
    line-height: 2.6rem;
    text-transform: uppercase;
    font-family: Verlag-Black;
  }

</style>