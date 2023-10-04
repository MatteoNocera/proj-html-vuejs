<script>
import CardLatestWork from './CardLatestWork.vue';

export default {
    name: 'LatestWork',
    data() {
        return {
            cards_last_work: [
                {
                    image: '../assets/img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
                    title: 'Mock-up',
                    description: 'Digital Experience',
                },
                {
                    image: '../assets/img/8wa60okr-1-790x576.jpg',
                    title: 'Basket of Flower on table',
                    description: 'Branding Strategy',
                },
                {
                    image: '../assets/img/DRY-1-790x576.jpg',
                    title: 'Purinky Products',
                    description: 'Digital Experience',
                },
                {
                    image: '../assets/img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
                    title: 'Satisfy Poster',
                    description: 'Branding Strategy',
                },
                {
                    image: '../assets/img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
                    title: 'Mock-up',
                    description: 'Digital Experience',
                },
            ]
        }
    },
    components: {
        CardLatestWork
    }
}
</script>

<template>
    <section id="latest_work">

        <div class="container">

            <div class="py-5">
                <h6 class="pt-5">Portfolio</h6>
                <div class="d-flex justify-content-between align-items-center">
                    <h2><span class="fw-bold">latest </span>work</h2>
                    <div class="d-flex gap-4">
                        <a href="#">
                            <i class="bi bi-arrow-left-circle" style="font-size: 2rem;"></i>
                        </a>
                        <a href="#">
                            <i class="bi bi-arrow-right-circle" style="font-size: 2rem;"></i>
                        </a>
                    </div>
                </div>


            </div>

        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 pb-5 flex-nowrap">

            <CardLatestWork v-for="card in cards_last_work" :title="card.title" :desc="card.description" :path="card.image">
            </CardLatestWork>


        </div>

        <div id="dot" class="d-flex justify-content-center py-5">
            <a class="selected_work" href="#latest_work">
                <i class="bi bi-dot" style="font-size: 2rem;"></i>
            </a>
            <a href="#latest_work">
                <i class="bi bi-dot" style="font-size: 2rem;"></i>
            </a>
            <a href="#latest_work">
                <i class="bi bi-dot" style="font-size: 2rem;"></i>
            </a>
            <a href="#latest_work">
                <i class="bi bi-dot" style="font-size: 2rem;"></i>
            </a>
        </div>


    </section>
</template>

<style lang="scss"></style>