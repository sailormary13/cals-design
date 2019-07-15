<template>
    <div class="col3-thirds">
        <slot></slot>
    </div>
</template>


<script>
export default {
  name: 'BaseColThirds',
  props: {
  }
}
</script>


<style lang="scss" scoped>

    @import "../assets/style-variables.scss";

    @media only screen and (min-width: 768px) {
    .col3-thirds {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1.6rem;
    }
  }

  .col3-thirds {
    margin: 4% 0;
  }


</style>