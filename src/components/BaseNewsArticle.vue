<template>
        <div class="news-feed-article">
            <div>
                <a href="https://google.com">
                    <img src="../assets/images/ag-hall-purp-flowers.jpg" alt="purple flowers with brick university building in background" class="img-block-100 news-article-img">
                </a>
            </div>
            <div>
                <a>
                    <h4>
                        First Detection of Spotted Wing Drosophila in Wisconsin for 2019
                    </h4>
                </a>
                <small>June 4, 2019 | Mary Cummins</small>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...
                </p>

            </div>

        </div>

</template>


<script>
export default {
  name: 'BaseNewsArticle',
  props: {
  }
}
</script>


<style lang="scss" scoped>

    @import "../assets/style-variables.scss";

    @media only screen and (min-width: 768px) { 
        .news-feed-article {
            display: grid;
            grid-template-columns: 1fr 5fr;
            grid-gap: 1.3rem;
        }
    }

    .news-feed-article {
        margin-bottom: 1.2rem;
    }

    h4 {
        margin: 4px 0 0 0;
    }

    p {
        margin-top: 0.5rem;
    }

    img {
        border-radius: .2rem;
    }

</style>