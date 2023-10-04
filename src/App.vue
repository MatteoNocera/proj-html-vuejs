<script>

import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue'
import AppGrow from './components/AppGrow.vue';
import WhatWeDo from './components/WhatWeDo.vue';

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
  }
}
</script>

<template>
  <AppHeader></AppHeader>

  <WhatWeDo></WhatWeDo>

  <AppGrow></AppGrow>

  <section id="latest_work">

  </section>

  <section id="pricing">

  </section>

  <section id="latest_post">

  </section>

  <section id="what_people_say">

  </section>

  <AppFooter></AppFooter>
</template>

<style ></style>
