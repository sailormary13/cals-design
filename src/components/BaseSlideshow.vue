<template>
  <div class="slideshow-container">
    <transition name="slideshow-anim" mode="out-in">
      <div v-for="slide in slides" class="slide" :key="slide.id" v-if="slide.id === slideNum">
        <img
          v-bind:src="slide.src"
          alt="lake and sky with light coming through clouds"
          class="d-block"
        />
      </div>
    </transition>

    <div class="slideshow-controls">
      <button @click="slideNext" class="next-slide arrow-control">></button>
      <button @click="slidePrevious" class="previous-slide arrow-control"><</button>
    </div>
  </div>
</template>


<script>
import img1 from "../assets/images/sky-water.jpg";
import img2 from "../assets/images/tomato.jpg";
import img3 from "../assets/images/cranberries.jpg";
import img4 from "../assets/images/students-on-pier.jpg";

export default {
  name: "BaseSlideshow",
  data() {
    return {
      slides: [
        { id: 1, src: img1 },
        { id: 2, src: img2 },
        { id: 3, src: img3 },
        { id: 4, src: img4 }
      ],
      slideNum: 1
    };
  },
  computed: {
    slideOutput() {
      return this.slides.filter(slide => slide.id == this.slideNum);
    }
  },
  methods: {
    slideNext() {
      this.slideNum = this.slideNum + 1;

      if (this.slideNum > this.slides.length) {
        this.slideNum = 1;
      }
    },
    slidePrevious() {
      this.slideNum = this.slideNum - 1;

      if (this.slideNum < 1) {
        this.slideNum = this.slides.length;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/style-variables.scss";

.slideshow-container {
  position: relative;
  background: #000;

  .slide {
    background: #000;

    img {
      height: 400px;
      width: 100%;
      object-fit: contain;
    }
  }

  .arrow-control {
    padding: 0.1rem .4rem .5rem .4rem;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    color: $white;
    font-size: 2.5rem;
  }

  /* is this terrible for accessibility? the outline wasn't so visually appealing on the slideshow */
  .arrow-control:focus {
    outline: none;
  }

  .next-slide {
    position: absolute;
    top: 46%;
    right: 0%;
    z-index: 2;
  }

  .previous-slide {
    position: absolute;
    top: 46%;
    left: 0%;
    z-index: 2;
  }
}

.slideshow-anim-enter-active {
  transition: all 0.3s ease;
}

.slideshow-anim-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale(0.9);
  transform-origin: right;
  opacity: 0;
}


/* transition styles from lobby display */
// .slideshow-anim-enter-active {
//   transition: all 0.5s ease;
//   transition-delay: 0.5s;
// }
// .slideshow-anim-leave-active {
//   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// }
// .slideshow-anim-enter
// /* .slide-fade-leave-active below version 2.1.8 */ {
//   transform: translateX(100px) rotate(10deg) scale(0.9);
//   transform-origin: center bottom;
//   opacity: 0;
// }

// .slideshow-anim-leave-to {
//   transform: translateX(-100px) rotate(-10deg) scale(0.9);
//   transform-origin: center bottom;
//   opacity: 0;
// }
</style>