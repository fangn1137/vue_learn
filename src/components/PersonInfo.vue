<template>
    <div id="app">
        <h3>自定义personinfo</h3>
        username: <input type="text" :value="personInfo.username" @input="handleUsername">
        address: <input type="text" :value="personInfo.address" @input="handleAddress">
    </div>
</template>

<script>
export default {
    name: 'personInfo',
    props: {
        personInfo: Object
    },
    model: {
        prop: 'personInfo',
        event: 'change'
    },
    methods: {
            handleUsername(e){
                this.$emit('change', {
                    ...this.personInfo,
                    username: e.target.value
                    })
            },
        handleAddress(e){
            this.$emit('change', {
                ...this.personInfo,
                address: e.target.value
                })
        }
    }
}
</script>

<style scoped>

</style>