<template>
  <div>
    <b-form-input v-model="username" placeholder="Enter your name"></b-form-input>
    <b-form-input v-model="sex" placeholder="Enter your sex"></b-form-input>
    <b-form-input v-model="age" placeholder="Enter your age"></b-form-input>
    <b-button @click="createUserObject">提交</b-button>
  </div>
</template>

<script>
import axios from "axios";
// import qs from 'qs'
export default {
  name: "findUser",
  data() {
    return {
      username: '',
      sex: '',
      age: '',
      UserObject: ''
    }
  },
  methods: {
    createUserObject() {
      const jsonStr = JSON.stringify({username: this.username ,age:this.age ,sex: this.age});
      console.log(jsonStr);
          axios.post(
              "http://127.0.01:8081/user/save",
              jsonStr,
              {
                headers: {
                  'Content-Type': 'application/json'
                }
              }
          ).then(response => {
            console.log(response)
          }).catch(e => {
            alert(e)
            console.log(e)
          });

    }
  }
}

</script>

<style scoped>

</style>
