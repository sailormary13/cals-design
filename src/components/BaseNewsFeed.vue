<template>
    <div class="news-feed">
        <slot></slot>
        <a href="https://news.cals.wisc.edu">All News >></a>
    </div>

</template>


<script>
import BaseNewsArticle from '../components/BaseNewsArticle.vue'

export default {
  name: 'BaseNewsFeed',
  components: {
      BaseNewsArticle
      }
}
</script>


<style lang="scss" scoped>

    @import "../assets/style-variables.scss";

    .news-feed {
        margin-top: 4%;
    }

</style>