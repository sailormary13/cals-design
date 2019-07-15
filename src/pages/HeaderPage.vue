<template>
    <div>
        <section>
            <div class="section-content">
                <h1>Header</h1>
                <p>
                  A consistent header across all CALS sites provides a less jarring experience for the user and communicates that the site is a legitimate CALS site. The header is made up of 3 components: the UW Bar, the Site Name Bar, and the Navigation Bar.
                </p>
                <ul>
                <li>
                  The UW Bar provides a link back to wisc.edu and displays secondary navigation if applicable.
                </li>
                <li>
                  The Site Name Bar displays the UW Crest logo and site name.
                </li>
                <li>
                  The Navigation Bar displays the main navigation links for the site.
                </li>
                </ul>
            </div>
        </section>

        <header>
          <BaseUWBar></BaseUWBar>
          <BaseSiteNameBar></BaseSiteNameBar>
          <BaseNavigationBar></BaseNavigationBar>
        </header>

        <section id="below-header-content-demo">
          <div class="section-content">
            <p>Page content goes after the header.</p>
          </div>
        </section>



    </div>

</template>


<style lang="scss">

  @import "../assets/style-variables.scss";
  
  .header-container {
    padding: .4rem 1.8rem .4rem 2rem;
  }

  @media only screen and (min-width: 768px) {
        .header-container {
            padding: .4rem 5rem .4rem 5rem;
        }
    }

    @media only screen and (min-width: 992px) {
        .header-container {
            padding: .4rem 8rem .4rem 8rem;
        }
    }

  .header-content {
    max-width: 900px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }

    #below-header-content-demo {
      padding-top: 1.4rem;
    }

    @media only screen and (min-width: 768px) {
      #below-header-content-demo {
        padding-top: 1.4rem;
      }
    }

    @media only screen and (min-width: 992px) {
        #below-header-content-demo {
            padding-top: 2.6rem;
        }
    }

</style>


<script>
import BaseUWBar from '../components/BaseUWBar.vue'
import BaseSiteNameBar from '../components/BaseSiteNameBar.vue'
import BaseNavigationBar from '../components/BaseNavigationBar.vue'

export default {
  name: 'HeaderPage',
  components: {
    BaseUWBar
    , BaseSiteNameBar
    , BaseNavigationBar
  }
}
</script>