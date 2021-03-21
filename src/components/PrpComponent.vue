<template>
    <div>
        name: {{name}}
        type: {{type}}
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        type: {
            validator: function(value){
                return ['success', 'warn', 'danger'].includes(value) // includes
            }
        }
    }
}
</script>

<style scoped>
    
</style>