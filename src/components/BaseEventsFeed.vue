<template>
    <div class="events-feed">
        <slot></slot>
        <a href="https://today.wisc.edu/events/tag/cals">More Events >></a>
    </div>

</template>


<script>
import BaseEvent from '../components/BaseEvent.vue'

export default {
  name: 'BaseNewsFeed',
  components: {
      BaseEvent
      }
}
</script>


<style lang="scss" scoped>

    @import "../assets/style-variables.scss";

    .events-feed {
        margin-top: 4%;
    }

</style>