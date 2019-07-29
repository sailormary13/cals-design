<template>
    <div class="news-feed">
        <slot></slot>
        <a href="https://news.cals.wisc.edu">All News >></a>
    </div>

</template>


<script>

export default {
  name: 'BaseNewsFeed',
  components: {
      }
}
</script>


<style lang="scss" scoped>

    @import "../assets/style-variables.scss";

    .news-feed {
        margin-top: 4%;
    }

</style>