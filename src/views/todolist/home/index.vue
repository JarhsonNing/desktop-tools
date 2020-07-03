<template>
    <div>
        <input type="text" v-model="inputValue" placeholder="接下来做什么">
        <button @click="addItem">增加</button>
        <h2>待办</h2>
        <ol>
            <li v-for="(item, index) in unfinishedList" :key="index">{{item}}
                <button @click="completeItem(index)">完成</button>
                <button @click="removeItem(index)">丢弃</button>
            </li>
        </ol>
        <h2>已完成</h2>
        <ol>
            <li v-for="(item, index) in finishedList" :key="index">{{item}}
                <button @click="deleteItem(index)">删除</button>
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    data() {
        return {
            unfinishedList: [],
            finishedList: [],
            inputValue: ''
        }
    },
    methods:{
        addItem() {
            this.unfinishedList.push(this.inputValue);
            this.inputValue = '';
        },
        completeItem(index) {
            let item = this.unfinishedList[index];
            this.unfinishedList.splice(index, 1);
            this.finishedList.push(item);
        },
        removeItem(index) {
            let item = this.unfinishedList[index];
            this.unfinishedList.splice(index, 1);
        },
        deleteItem(index) {
            let item = this.finishedList[index];
            this.finishedList.splice(index, 1);
        }
    }
}
</script>