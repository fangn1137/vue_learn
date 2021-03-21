<template>
    <div>
        <!-- v-model demo -->
        语法糖：<input :value="something" @input="something = $event.target.value">
        <label for="something">{{something}}</label>
        <br>
        input1：<input id="input1" v-model="input1"/>
        <label for="input1">{{input1}}</label>
        <br>

        <custom-input v-model="customeValue"></custom-input>
        <label for="customeValue">{{customeValue}}</label>

        <person-info v-model="personInfoData" :areaCode.sync='areaCode'/>
        <label for="personInfo">{{personInfoData}} - {{areaCode}}</label>
        <br>
        

    
    </div>
</template>

<script>
import CustomInput from '../../components/CustomInput.vue'
import PersonInfo from '../../components/PersonInfo.vue'
export default {
    name: 'biaodan',
    data() {
        return {
            input1: '',
            something: '',
            customeValue: '',
            personInfoData: {
                username: 'init username',
                address: 'init address',
            },
            areaCode:''
        }
    },
    components: {
        CustomInput,
        PersonInfo
    }
}
</script>