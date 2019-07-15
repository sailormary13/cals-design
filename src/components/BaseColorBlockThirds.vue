<template>
    <div class="col3-thirds">
        <slot></slot>
    </div>
</template>


<script>

export default {
  name: 'BaseColorBlockThirds',
  components: {
  }
}
</script>


<style lang="scss" scoped>

    @import "../assets/style-variables.scss";

    @media only screen and (min-width: 768px) {
    .col3-thirds {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .col3-thirds {
    margin: 4% 0;
    color: $white;
    text-align: center;
  }

  .col3-thirds div {
      padding: 8%;
  }


  .col3-thirds div:nth-child(odd) {
      background-color: $badger-red;
  }

  .col3-thirds div:nth-child(even) {
      background-color: $dark-red;
  }

  .col3-thirds div:nth-child(6) {
      background-color: $dark-red;
      background-image: url("../assets/images/cranberries.jpg");
      background-size: cover;
      background-position: center;
  }


</style>