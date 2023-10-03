<script>

import { state } from '../state.js';

export default {
    name: 'AppFooter',
    data() {
        return {
            state,
        }
    }
}
</script>
<template>
    <footer id="app_footer">
        <div class="container">
            <div class="top_footer">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-between">

                    <div class="col">
                        <a href="#">
                            <img src="../assets/img/white-logo-2.png" alt="logo">
                        </a>
                        <p class="mt-5">
                            When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper
                            impenetrable
                        </p>
                    </div>

                    <div class="col" id="quick">
                        <h2 class="text-white">Quick Links</h2>
                        <ul class="list-unstyled">
                            <li v-for="link in state.quick_links">
                                <a href="#">{{ link.voice }}</a>
                            </li>
                        </ul>

                    </div>

                    <div class="col" id="resouces">
                        <h2 class="text-white">Resources</h2>
                        <ul class="list-unstyled">
                            <li class="text-center" v-for="link in state.resources_links">
                                <a href="#">{{ link.voice }}</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col" id="contact">
                        <h2 class="text-white">Contact Us</h2>

                        <p><span class="text-white">Address : </span> Patricia C. Arnedee 4401 Waldeck<br>Street Grapevine
                            Nashville, Tx 76051</p>

                        <p><span class="text-white">Phone : </span>+99 (0) 1010000888</p>

                        <p><span class="text-white">Email : </span><a href="#">Info@yourdomain.com</a></p>

                    </div>


                </div>
            </div>

            <div class="bottom_footer">

            </div>
        </div>
    </footer>
</template>


