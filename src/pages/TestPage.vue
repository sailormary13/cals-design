<template>
  <div>
    <section>
        <div class="section-content">
          <BaseColThirds>
              <BaseCard></BaseCard>
              <BaseCard></BaseCard>
              <BaseCard></BaseCard>
          </BaseColThirds>
        </div>
      </section>
    </div>

</template>


<style lang="scss" scoped>

  @import "../assets/style-variables.scss";


</style>


<script>
import BaseColThirds from '../components/BaseColThirds.vue'
import BaseCard from '../components/BaseCard.vue'
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'TestPage',
  components: {
    BaseColThirds
    , BaseCard
    , BaseButton
  }
}
</script>