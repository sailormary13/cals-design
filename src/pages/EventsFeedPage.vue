<template>
    <div>
      <section>
        <div class="section-content">
          <h1>Events Feed</h1>
          <p>
            The events feed displays events from an event source, such as <a href="https://today.wisc.edu">today.wisc.edu</a>.
          </p>
          <BaseEventsFeed>
            <BaseEvent></BaseEvent>
            <BaseEvent></BaseEvent>
            <BaseEvent></BaseEvent>
            <BaseEvent></BaseEvent>
            <BaseEvent></BaseEvent>
          </BaseEventsFeed>
        </div>
      </section>
    </div>

</template>


<style lang="scss" scoped>

  @import "../assets/style-variables.scss";


</style>


<script>
import BaseEventsFeed from '../components/BaseEventsFeed.vue'
import BaseEvent from '../components/BaseEvent.vue'

export default {
  name: 'EventsFeedPage',
  components: {
    BaseEventsFeed
    , BaseEvent
  }
}
</script>