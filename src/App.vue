<script>

import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue'
import AppGrow from './components/AppGrow.vue';
import WhatWeDo from './components/WhatWeDo.vue';
import LatestWork from './components/LatestWork.vue';
import AppPricing from './components/AppPricing.vue';
import LatestPost from './components/LatestPost.vue';
import WhatPeopleSay from './components/WhatPeopleSay.vue';

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppFooter,
    WhatWeDo,
    AppGrow,
    LatestWork,
    AppPricing,
    LatestPost,
    WhatPeopleSay
  }
}
</script>

<template>
  <AppHeader></AppHeader>

  <WhatWeDo></WhatWeDo>

  <AppGrow></AppGrow>

  <LatestWork></LatestWork>

  <AppPricing></AppPricing>

  <LatestPost></LatestPost>

  <WhatPeopleSay></WhatPeopleSay>

  <AppFooter></AppFooter>
</template>

<style ></style>
