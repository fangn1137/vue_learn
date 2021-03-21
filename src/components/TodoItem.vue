<template>
    <div>
        <li class='text'>{{todo}}</li>
    </div>
</template>
<script>
export default {
    props: ['todo']
}
</script>

<style scoped>
    .text {
        color: red
    }
</style>