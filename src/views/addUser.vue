<template>
  <div id="app">
    <table class="table" >
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">姓名</th>
        <th scope="col">年龄</th>
        <th scope="col">性别</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="e in dataList" :key="e.id">
        <th scope="row">{{e.id}}</th>
        <td>{{ e.username }}</td>
        <td>{{ e.age }}</td>
        <td>{{ e.sex }}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>

import axios from "axios";

export default {
  name: "addUser",
  data(){
    return{
      dataList:[]
    }
  },
  async created(){
    let {data} =await axios.get('http://127.0.0.1:8081/user/getall')
    this.dataList = data;
   console.log(data)
  },
}
</script>

<style>
.table {
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
</style>
