<template>
    <div>
        <section>
            <div class="section-content">
                <h1>Layout</h1>
                <p>Pages are divided into sections with section HTML elements. Sections are full-width and may have a background color.  Content within sections lives in a div element with class <code>.section-content</code>.</p>
            </div>
        </section>

        <section class="section-red">
            <div class="section-content">
                <h3>Section with Background Color</h3>
                <p>This is a section with a <code>$badger-red</code> background. The text color is <code>$white</code>. It can contain any components you desire, but beware, most components look best on a light background. <a href="https://google.com">This is a link.</a></p>
                <BaseButton>Call to Action</BaseButton>
            </div>
        </section>

        <section>
            <div class="section-content">
                <h3>Style</h3>
                <p>No margin or padding exists on the body or main elements. Section elements have padding. The section-content divs have a max-width of 900px and auto margin to ensure that text and other content is digestable.</p>

            </div>
        </section>

        <section class="section-wheat">
            <div class="section-content">
                <h3>Another Section with Background Color</h3>
                <p>This section has a <code>$wheat</code> background color.</p>
                <p>This color is much easier on the eyes than the red.</p>
                <BaseButton>Call to Action</BaseButton>
            </div>
        </section>

        <section>
            <div class="section-content">
                <h3>Use Caution</h3>
                <p>Most of the time, the regular section element with the white background color is what you need. Only use a non-white section if some content especially needs to be separated. The red and wheat-colored sections look best with white sections above and below them. Also, you'll likely only need to use one colored section per page. (This page uses several to demonstrate the available options, but as you can see, it's way too many for a normal page.)</p>
            </div>
        </section>

        <section class="section-img">
            <div class="section-content">
                <h3>Section with Background Image</h3>
                <p>Use sparingly. Text on images is often hard to read, and not all images work as a background.</p>
                <BaseButton>Call to Action</BaseButton>
            </div>
        </section>



    </div>

</template>


<style lang="scss">

  @import "../assets/style-variables.scss";

  /* Sections */
    section {
        padding: 1.8rem;
    }

    @media only screen and (min-width: 768px) {
        section {
            padding: 3rem 5rem 3.5rem 5rem;
        }
    }

    @media only screen and (min-width: 992px) {
        section {
            padding: 4rem 8rem 4.5rem 8rem;
        }
    }

    /* Reduce top-padding from first section on page */
    section:first-child {
        padding-top: 1.4rem;
    }

    @media only screen and (min-width: 768px) {
        section:first-child {
            padding-top: 1.4rem;
        }
    }

    @media only screen and (min-width: 992px) {
        section:first-child {
            padding-top: 2.6rem;
        }
    }

    .section-content {
        max-width: 900px;
        margin: auto;
    }

    .section-red {
        background-color: $badger-red;
        color: $white;
    }

    .section-red h3 {
        color: $white;
    }

    .section-red a {
        color: $white;
        text-decoration: underline;
    }

    .section-red a:hover {
        color: $white;
        text-decoration: none;
    }

    .section-red a.btn {
        background-color: $white;
        border: 1px solid $white;
        text-decoration: none;
        color: $badger-red;
        transition: background-color .2s ease-in-out;
    }

    .section-red a.btn:hover {
        background-color: $badger-red;
        border: 1px solid $white;
        text-decoration: none;
        color: $white;
    }

    .section-wheat {
        background-color: $wheat;
    }

  .section-img {
      background-image: url("../assets/images/cranberries.jpg");
      background-size: cover;
      background-position: center;
      color: $white;
  }

  .section-img h3, .section-img h4, .section-img h5 {
      color: $white;
  }


</style>


<script>
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'LayoutPage',
  components: {
    BaseButton
  }
}
</script>