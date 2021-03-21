<template>
    <div>
        自定义手机号：
        <input type="input" :value="phone" @input="$emit('input', $event.target.value)">
        <!-- <input type="input" :value="phone" @input="phone = $event.target.value">
        <label for="phone">{{phone}}</label> -->
    </div>
</template>

<script>
export default {
    props: {
        phone: String
    }
    
    
}
</script>