<template>
  <div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">输入id</span>
      </div>
      <input type="text" class="form-control" v-model="deleteById" aria-label="Amount (to the nearest dollar)">
      <div class="input-group-append">
        <button type="button" class="btn btn-danger" @click="deleteUserById()">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "deleteUser",
  data() {
    return {
      deleteById: ''
    }
  },
  methods: {
    deleteUserById() {
      axios.delete("http://127.0.0.1:8081/user/dele?id=" + this.deleteById,)
          .then(e => {
           if (e.data["status"]!==200){
             alert(e.data["errorMessage"])
           }else {
             alert(e.data["message"])
           }
          }).catch(e => {
         console.log(e)
      });
    }
  }
}
</script>

<style scoped>

</style>
