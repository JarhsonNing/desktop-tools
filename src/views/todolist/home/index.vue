<template>
    <div>
        <input type="text" v-model="inputValue">
        <button @click="addItem">增加</button>
        <ul>
            <li v-for="(item, index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
            inputValue: ''
        }
    },
    methods:{
        addItem(){
            this.list.push(this.inputValue);
            this.inputValue = ''
        }
    }
}
</script>