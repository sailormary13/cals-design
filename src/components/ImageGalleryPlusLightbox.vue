<template>
    <div>
        <BaseImageGallery>
            <a v-on:click="displayLightbox()">
            <img src="../assets/images/sky-water.jpg" alt="lake and sky with light coming through clouds">
            </a>
            <a v-on:click="displayLightbox()">
            <img src="../assets/images/students-on-pier.jpg" alt="students sitting on a pier on a chilly day">
            </a>
            <a v-on:click="displayLightbox()">
            <img src="../assets/images/protein-conjugates.jpg" alt="3 vials of liquid">
            </a>
            <a v-on:click="displayLightbox()">
            <img src="../assets/images/tomato.jpg" alt="a tomato on the plant">
            </a>
            <a v-on:click="displayLightbox()">
            <img src="../assets/images/spooner-research-station.jpg" alt="agricultural buildings and field">
            </a>
            <a v-on:click="displayLightbox()">
            <img src="../assets/images/mossy-logs.jpg" alt="a tomato on the plant">
            </a>
        </BaseImageGallery>

        <div v-if="displayedLightbox" v-on:click="displayLightbox()" class="modal-dark-bg">
        </div>

        <div class="modal-slideshow-container" v-if="displayedLightbox">
            <BaseSlideshow>
            </BaseSlideshow>
        </div>

    </div>

</template>


<script>
import BaseImageGallery from '../components/BaseImageGallery.vue'
import BaseSlideshow from '../components/BaseSlideshow.vue'

export default {
  name: 'ImageGalleryPlusLightbox',
  components: {
      BaseImageGallery
      , BaseSlideshow
  }
  , data: function() {
      return {
          displayedLightbox: false
      }
  }
  , methods: {
    displayLightbox: function() {
      this.displayedLightbox = !this.displayedLightbox;
    }
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

    /* Modal */
    .modal-dark-bg {
        background-color: rgba(0,0,0,0.9);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 4;
        cursor: pointer;
    }

    .modal-slideshow-container {
        position: fixed;
        top: 25%;
        left: 0;
        width: 100%;
        z-index: 5;
    }


</style>