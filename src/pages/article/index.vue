<template>
    <div>
        新闻的ID:{{this.$route.params.id}}
        新闻的标题:{{this.$route.params.title}}
    </div>
</template>

<script>
    export default {
        name: "news-article",
        methods:{

        },
        created(){
            console.log(this.$route.params.id);
        },

    }
</script>

<style scoped>

</style>
