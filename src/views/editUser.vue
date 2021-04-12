<template>
  <div>
    <div class="input-group input-group-lg">
      <div class="input-group-prepend">
        <span class="input-group-text" style="width: 73px">id</span>
      </div>
      <input type="text" v-model="id" class="form-control" aria-label="Sizing example input"
             aria-describedby="inputGroup-sizing-lg">
      <button type="button" @click="findUserById" class="btn btn-info">查找用户</button>
    </div>

    <div class="input-group input-group-lg">
      <div class="input-group-prepend">
        <span class="input-group-text">姓名</span>
      </div>
      <input type="text" v-model="username" class="form-control" aria-label="Sizing example input"
             aria-describedby="inputGroup-sizing-lg">
    </div>

    <div class="input-group input-group-lg">
      <div class="input-group-prepend">
        <span class="input-group-text">性别</span>
      </div>
      <input v-model="sex" type="text" class="form-control" aria-label="Sizing example input"
             aria-describedby="inputGroup-sizing-lg">
    </div>

    <div class="input-group input-group-lg">
      <div class="input-group-prepend">
        <span class="input-group-text">年龄</span>
      </div>
      <input type="text" class="form-control" v-model="age" aria-label="Sizing example input"
             aria-describedby="inputGroup-sizing-lg">
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "editUser",
  data() {
    return {
      id: '',
      username: '',
      sex: '',
      age: ''
    }
  },
  methods: {
    findUserById: function () {
      axios.get("http://127.0.0.1:8081/user/finduser?id="+this.id).then(e => {
       this.sex=e.data["sex"]
       this.username=e.data["username"]
       this.age=e.data["age"]
      }).catch(e => {
        console.log(e);
      })
    }
  }
}
</script>


<style scoped>

</style>
