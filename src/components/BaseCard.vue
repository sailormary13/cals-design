<template>
    <div class="base-card">
        <img src="../assets/images/cranberries.jpg" alt="close up of cranberries" class="img-block-100">
        <h4>Cranberries</h4>
        <p>
            The UW Fruit Program is dedicated to cranberry research.
        </p>
        <div class="btn-block">
            <BaseButton>Learn More</BaseButton>
        </div>
    </div>

</template>


<script>
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'BaseCard',
  components: {
      BaseButton
      }
}
</script>


<style lang="scss" scoped>

    @import "../assets/style-variables.scss";

    .base-card {
        border-radius: .2rem;
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2)
        , 0px 2px 2px 0px rgba(0,0,0,0.14)
        , 0px 1px 5px 0px rgba(0,0,0,0.12);
        margin-top: 6%;
        padding-bottom: 8px;
        max-width: 350px;
    }

    a.btn {
        display: block;
        margin: 0 24px 16px 24px;
        text-align: center;
    }

    img {
        border-radius: .2rem;
    }

    p {
        padding: 0px 24px 16px 24px;
    }
    
    h4 {
        padding: 0px 24px;
    }

</style>