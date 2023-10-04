<script>

import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue'
import AppGrow from './components/AppGrow.vue';
import WhatWeDo from './components/WhatWeDo.vue';
import LatestWork from './components/LatestWork.vue';

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
  }
}
</script>

<template>
  <AppHeader></AppHeader>

  <WhatWeDo></WhatWeDo>

  <AppGrow></AppGrow>

  <LatestWork></LatestWork>

  <section id="pricing">

  </section>

  <section id="latest_post">

  </section>

  <section id="what_people_say">

  </section>

  <AppFooter></AppFooter>
</template>

<style ></style>
