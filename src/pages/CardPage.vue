<template>
    <div>
      <section>
        <div class="section-content">
          <h1>Cards</h1>
          <p>
              Cards are a handy way to showcase multiple items or options, such as news articles or subpage navigation. Cards typically consist of an image or icon, some text, and a CTA. They look nice as a set of 3 on large screens. On small screens, they take up the full-width.
          </p>
          <!-- <BaseColThirds> -->
            <BaseCard></BaseCard>
          <!-- </BaseColThirds> -->
        </div>
      </section>
    </div>

</template>


<style lang="scss" scoped>

  @import "../assets/style-variables.scss";


</style>


<script>
import BaseCard from '../components/BaseCard.vue'
import BaseColThirds from '../components/BaseColThirds.vue'

export default {
  name: 'CardPage',
  components: {
    BaseCard
    , BaseColThirds
  }
}
</script>