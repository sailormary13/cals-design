<template>
    <section>
        <div class="section-content">
            <h1>Images</h1>
            <p>Two priorities for images are responsiveness and accessibility. Images must look good across screen sizes, and people using screen readers must be able to get information from the image. To make images accessible, always add alt text to image with the<code> alt=""</code> attribute. Alt text should describe in a short sentence what is seen in the image.

            <h3>Base Image</h3>
            <p>The base img element is set up with the following styles to encourage responsive behavior.</p>
            <code>max-width: 100%; height: auto;</code>
            <p>Make your screen size smaller to see the image's responsive behavior.</p>
            <img src="../assets/images/sky-water.jpg" alt="lake and sky with light coming through clouds">

            <h3>Centered Image</h3>
            <p>Add the class <code>.img-center</code> to your img element to apply the following styles.</p>
            <code> display: block; margin: auto;</code>
            <p>Your image is centered in its container.</p>
            <img src="../assets/images/sky-water.jpg" alt="lake and sky with light coming through clouds" class="img-center">

            <h3>Full-With, Block Image</h3>
            <p>Add the class <code>.img-block-100</code> to your img element to apply the following styles.</p>
            <code> display: block; width: 100%;</code>
            <p>Your image takes up the full-width of its parent container.</p>
            <img src="../assets/images/sky-water.jpg" alt="lake and sky with light coming through clouds" class="img-block-100">

            <h3>Image Gallery</h3>
            <p>This is a simple image gallery for displaying several photos on a page. The gallery is responsive, and the number of images in a row adjusts at small and medium breakpoints. It works with both horizontal and vertical photographs, although some cropping occurs to ensure consistent sizing.</p>
            <BaseImageGallery>
              <img src="../assets/images/ag-hall-purp-flowers.jpg" alt="purple flowers with brick university building in background">
              <img src="../assets/images/students-on-pier.jpg" alt="students sitting on a pier on a chilly day">
              <img src="../assets/images/protein-conjugates.jpg" alt="3 vials of liquid">
              <img src="../assets/images/tomato.jpg" alt="a tomato on the plant">
              <img src="../assets/images/spooner-research-station.jpg" alt="agricultural buildings and field">
              <img src="../assets/images/mossy-logs.jpg" alt="a tomato on the plant">
            </BaseImageGallery>

            <h3>Image Gallery with Lightbox Slideshow</h3>
            <p>On the page, users see the normal image gallery component, but if they click one of the images, the modal "lightbox" appears with all the images in a slideshow.</p>
            <ImageGalleryPlusLightbox></ImageGalleryPlusLightbox>

            <h3>On-Page Slideshow</h3>
            <p>As indicated in the name, this component lives on the page. A significant disadvantage of this component is that only one image is displayed at a time, and there is no preview of all the images. As a result, the user might not engage with the slideshow at all and could miss out on content. Ultimately, the accessibility of a slideshow component is questionable. Thus the <em>Image Gallery with Lightbox Slideshow</em> component may be preferable in many cases.</p>
            <BaseSlideshow>
            </BaseSlideshow>

        </div>
    </section>

</template>


<style lang="scss">

  @import "../assets/style-variables.scss";

  


</style>


<script>

import BaseImageGallery from '../components/BaseImageGallery.vue'
import BaseSlideshow from '../components/BaseSlideshow.vue'
import ImageGalleryPlusLightbox from '../components/ImageGalleryPlusLightbox.vue'

export default {
  name: 'ImagePage',
  components: {
    BaseImageGallery
    , BaseSlideshow
    , ImageGalleryPlusLightbox
  } 
}

</script>