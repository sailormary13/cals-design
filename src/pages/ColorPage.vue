<template>
  <div>
    <section>
      <div class="section-content">
        <h1>Color</h1>
        <BaseColThirds>
          <div class="color-swatch">
            <p>$badger-red
              <br>#c5050c
              <br>UW’s primary red.
            </p>
          </div>
          <div class="color-swatch">
            <p>$blue
              <br>#0479a8
              <br>Links and buttons.
            </p>
          </div>
          <div class="color-swatch">
            <p>$dark-blue
              <br>#04658b
              <br>Button hover.
            </p>
          </div>
          <div class="color-swatch">
            <p>$medium-gray
              <br>#646569
              <br>Accent.
            </p>
          </div>
          <div class="color-swatch">
            <p>$dark-gray
              <br>#494949
              <br>Lighter text.
            </p>
          </div>
          <div class="color-swatch">
            <p>$darkest-gray
              <br>#2f2f2f
              <br>Body text and dark backgrounds.
            </p>
          </div>
          <div class="color-swatch">
            <p>$white
              <br>#f7f7f7
              <br>Light backgrounds.
            </p>
          </div>
          <div class="color-swatch">
            <p>$wheat
              <br>#f2e7d5
              <br>Accent.
            </p>
          </div>
          <div class="color-swatch">
            <p>$dark-red
              <br>#9b0000
              <br>Accent.
            </p>
          </div>
          <div class="color-swatch">
            <p>$light-blue
              <br>#dadfe1
              <br>Accent.
            </p>
          </div>
          <div class="color-swatch">
            <p>$light-gray
              <br>#e3e3e3
              <br>Accent.
            </p>
          </div>
        </BaseColThirds>
      </div>
    </section>
    </div>

</template>


<style lang="scss" scoped>

@import "../assets/style-variables.scss";

  .color-swatch {
    height: 160px;
    color: $white;
    display: flex;
    padding: 0 16px;
  }

  .color-swatch p {
    align-self: flex-end;
  }

  // Assigns a system color to each color-swatch
  @each $color in $all-colors {
    // Returns the list index of the color
    $i: index($all-colors, $color);

    // Creates the selectors and assigns them a color
    div.color-swatch:nth-of-type(#{$i}) { 
      background-color: $color; 
      color: set-font-color-color-swatch($color);
      border: set-border-color-swatch($color);
      }

}


</style>


<script>

import BaseColThirds from '../components/BaseColThirds.vue'

export default {
  name: 'ColorPage',
  components: {
    BaseColThirds
  }
}
</script>