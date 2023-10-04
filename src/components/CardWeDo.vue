<script>
export default {
    name: 'CardWeDo',
    data() {
        return {

        }
    },
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
    <div class="col my-5">
        <div class="card h-100" style="width:18rem;">
            <img :src="getImagePath(path)" :alt="title">
            <div class="card-body">
                <h5 class="card-title my-4">{{ title }}</h5>

                <p class="card-text">
                    {{ desc }}
                </p>

            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>