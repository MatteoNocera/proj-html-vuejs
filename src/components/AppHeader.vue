<script>

import { state } from '../state.js'
import AppJumbo from './AppJumbo.vue';

export default {
    name: 'AppHeader',
    data() {
        return {
            state,
            active: 0,
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
            <div class="container-fluid justify-content-between  align-items-center">
                <a class="navbar-brand" href="#">
                    <img src="../assets/img/white-logo-2.png" class="p-0" alt="Logo">
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


    </header>
</template>



<style lang="scss"></style>