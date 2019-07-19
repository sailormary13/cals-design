<template>
        <div class="img-gallery-container">
            <slot></slot>
        </div>

</template>


<script>
export default {
  name: 'BaseImageGallery',
  props: {
  }
}
</script>


<style lang="scss" scoped>

    @import "../assets/style-variables.scss";

     .img-gallery-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1.6rem;
     }
     
     .img-gallery-container img {
        width: 100%;
        height: 140px;
        object-fit: cover;
    }

    @media only screen and (min-width: 768px) {
        .img-gallery-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 1.6rem;
        }
    }

    @media only screen and (min-width: 992px) {
        .img-gallery-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 1.6rem;
        }
    }


</style>