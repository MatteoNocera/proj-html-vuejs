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
                        <a class="mb-3" href="#">
                            <img src="../assets/img/white-logo-2.png" alt="logo">
                        </a>
                        <p class="mt-5">
                            When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper
                            impenetrable
                        </p>
                    </div>

                    <div class="col" id="quick">
                        <h2 class="text-white mb-4">Quick Links</h2>
                        <ul class="list-unstyled">
                            <li v-for="link in state.quick_links">
                                <a href="#">{{ link.voice }}</a>
                            </li>
                        </ul>

                    </div>


                    <div class="col" id="resouces">
                        <h2 class="text-white mb-4">Resources</h2>
                        <ul class="list-unstyled">
                            <li class="text-center" v-for="link in state.resources_links">
                                <a href="#">{{ link.voice }}</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col" id="contact">
                        <h2 class="text-white mb-4">Contact Us</h2>

                        <p><span class="text-white">Address : </span> Patricia C. Arnedee 4401 Waldeck<br>Street Grapevine
                            Nashville, Tx 76051</p>

                        <p><span class="text-white">Phone : </span>+99 (0) 1010000888</p>

                        <p><span class="text-white">Email : </span><a href="#">Info@yourdomain.com</a></p>

                    </div>


                </div>
            </div>
        </div>

        <hr>

        <div class="container">
            <div class="bottom_footer d-flex justify-content-between py-5 align-items-center">

                <p class="m-0">© 2020 Phlo. All Rights Reserved.</p>

                <div class="d-flex gap-4 align-items-center">

                    <a href="#">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a class="me-3" href="#">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a id="arrow" href="#app_header">
                        <i class="bi bi-arrow-up-circle-fill"></i>
                    </a>
                    <a id="message" href="#app_header">
                        <i class="bi bi-chat-square"></i>
                    </a>

                </div>

            </div>
        </div>

    </footer>
</template>


