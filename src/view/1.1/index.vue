<template>
    <div>
        <SlopDome> 
            <p>default slot</p>
            <template v-slot:title>
            <p>tile slot1</p>    
            <p>title slot2</p>
             </template>
             <template v-slot:item='props'>
                 item slot-scope {{props}}
             </template>
        </SlopDome>
    </div>
</template>

<script>
import SlopDome from '../../components/Slot.vue'
export default {
    name: 'slot-index',
    data(){
        return {
            // props: 'pro123123'
        }
    },
    components: {
        SlopDome
    }
}
</script>