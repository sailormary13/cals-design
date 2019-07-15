<template>
    <div>
      <section>
        <div class="section-content">
          <h1>News Feed</h1>
          <p>
            This component displays news articles from a source, such as CALS News. The full-width display contains the featured image, title, date published, author, and excerpt.
          </p>
          <BaseNewsFeed>
            <BaseNewsArticle></BaseNewsArticle>
            <BaseNewsArticle></BaseNewsArticle>
            <BaseNewsArticle></BaseNewsArticle>
            <BaseNewsArticle></BaseNewsArticle>
            <BaseNewsArticle></BaseNewsArticle>
          </BaseNewsFeed>
        </div>
      </section>
    </div>

</template>


<style lang="scss" scoped>

  @import "../assets/style-variables.scss";


</style>


<script>
import BaseNewsFeed from '../components/BaseNewsFeed.vue'
import BaseNewsArticle from '../components/BaseNewsArticle.vue'

export default {
  name: 'NewsFeedPage',
  components: {
    BaseNewsFeed
    , BaseNewsArticle
  }
}
</script>