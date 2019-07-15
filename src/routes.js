import Buttons from './pages/ButtonPage.vue';
import Purpose from './pages/PurposePage.vue';
import Cards from './pages/CardPage.vue';
import Typography from './pages/TypographyPage.vue';
import Test from './pages/TestPage.vue';
import Color from './pages/ColorPage.vue';
import NewsFeed from './pages/NewsFeedPage.vue';
import Principles from './pages/PrinciplesPage.vue';
import Logos from './pages/LogosPage.vue';
import ColorBlocks from './pages/ColorBlockPage.vue';
import Layout from './pages/LayoutPage.vue';
import Header from './pages/HeaderPage.vue';
import Images from './pages/ImagePage.vue';
import EventsFeed from './pages/EventsFeedPage.vue';

export default [
  {
    path: '/buttons',
    component: Buttons
  }
  , {
    path: '/',
    redirect: '/purpose'
  }
  , {
    path: '/purpose',
    component: Purpose
  }
  , {
    path: '/cards',
    component: Cards
  }
  , {
    path: '/typography',
    component: Typography
  }
  , {
    path: '/test',
    component: Test
  }
  , {
    path: '/color',
    component: Color
  }
  , {
    path: '/newsfeed',
    component: NewsFeed
  }
  , {
    path: '/principles',
    component: Principles
  }
  , {
    path: '/logos',
    component: Logos
  }
  , {
    path: '/colorblocks',
    component: ColorBlocks
  }
  , {
    path: '/layout',
    component: Layout
  }
  , {
    path: '/header',
    component: Header
  }
  , {
    path: '/images',
    component: Images
  }
  , {
    path: '/eventsfeed',
    component: EventsFeed
  }

];