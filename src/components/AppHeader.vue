<script>

import { state } from '../state.js'
import AppJumbo from './AppJumbo.vue';

export default {
    name: 'AppHeader',
    data() {
        return {
            state,
            active: '',
        }
    },
    components: {
        AppJumbo,
    }
}
</script>

<template>
    <header id="app_header">

        <nav class="navbar navbar-expand-sm container">
            <div class="container-fluid justify-content-between">
                <a class="navbar-brand" href="#">
                    <img src="../assets/img/white-logo-2.png" alt="Logo">
                </a>
                <div class="" id="">
                    <div class="navbar-nav gap-4">

                        <a v-for="(voice, index) in state.menu_voices" @click="active = index"
                            :class="active === index ? 'selected' : ''" class="nav-link" aria-current="page" href="#">{{
                                voice.name }}</a>


                        <div class="">
                            <button class="btn btn-primary rounded-pill btn_focus">Sign In</button>
                        </div>

                    </div>
                </div>
            </div>
        </nav>


        <AppJumbo></AppJumbo>

        <!-- <div id="jumbotron" class="container pb-5">
            <div class="row align-items-center">

                <div class="col-5">
                    <h2 class="fw-bold">Business Planning</h2>
                    <h2 class="fw-medium">Digital Technology</h2>
                    <h2 class="fw-bold">Modern Solution !</h2>
                    <p>
                        When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper
                        surface
                    </p>

                    <div class="d-flex gap-3">
                        <button class="btn btn-danger rounded-pill btn_attention">Try It Now</button>
                        <button class="btn btn-primary rounded-pill btn_focus">Explore more</button>
                    </div>

                </div>
                <div id="jumbo-img" class="col-7">
                    <img src="../assets/img/header.png" alt="men on desk">
                </div>
            </div>
        </div> -->

    </header>
</template>



<style lang="scss"></style>