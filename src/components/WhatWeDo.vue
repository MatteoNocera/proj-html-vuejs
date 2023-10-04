<script>

import CardWEDo from './CardWeDo.vue'

export default {
    name: 'WhatWeDo',
    data() {
        return {
            cards_we_do: [
                {
                    image: '../assets/img/Group-247.png',
                    title: 'Data Analysis',
                    description: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
                },
                {
                    image: '../assets/img/Group-567.png',
                    title: 'SEO Optimization',
                    description: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
                },
                {
                    image: '../assets/img/Group-538.png',
                    title: 'Security Data',
                    description: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
                },
                {
                    image: '../assets/img/Group-566.png',
                    title: 'Branding Strategy',
                    description: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
                },
            ]
        }
    },
    components: {
        CardWEDo,
    }
}
</script>

<template>
    <section id="what_we_do">
        <div class="container">

            <div class="text-center col-6 m-auto">
                <h6 class="pt-5">Our Services</h6>
                <h2><span class="fw-bold">What </span>We Do</h2>
                <p>
                    When, while the lovely valley teems with vapour around meand the
                </p>
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">

                <CardWEDo v-for="card in cards_we_do" :path="card.image" :title="card.title" :desc="card.description">
                </CardWEDo>

            </div>

            <div class="d-flex justify-content-center py-5">
                <button class="btn btn-danger rounded-pill btn_attention">View All Services</button>
            </div>


        </div>

    </section>
</template>

