<template>
    <div id="app">
        <h3>自定义personinfo</h3>
        <select type="number" :value="areaCode" @change="hanldeChangeAreaCode">
            <option value="+86">+86</option>
            <option value="+87">+87</option>
        </select>
        username: <input type="text" :value="personInfo.username" @input="handleUsername">
        address: <input type="text" :value="personInfo.address" @input="handleAddress">
    </div>
</template>

<script>
export default {
    name: 'personInfo',
    props: {
        personInfo: Object,
        areaCode: String
    },
    data() {
        return {
            
        }
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
        },
        hanldeChangeAreaCode(e){
            this.$emit('update:areaCode', e.target.value);
        }
    }
}
</script>

<style scoped>

</style>