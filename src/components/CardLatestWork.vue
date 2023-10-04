<script>
export default {
    name: 'CardLatestWork',
    props: {
        title: String,
        desc: String,
        path: String,
    },
    methods: {
        getImagePath: function (img) {
            return new URL(img, import.meta.url).href
        }
    }
}
</script>

<template>
    <div class="col p-3">
        <div class="card h-100">
            <img :src="getImagePath(path)" class="card-img-top" :alt="title">

            <div class="card-body d-flex align-items-center justify-content-around">
                <h5 class="card-title fw-bold">{{ title }}</h5>

                <p class="card-text">{{ desc }}</p>

            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>