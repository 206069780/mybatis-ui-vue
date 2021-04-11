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
      age:'',
      UserObject:''
    }
  },
  methods:{
    createUserObject(){
 /*     let postData = qs.stringify({
          username:this.username,
          sex:this.sex,
          age:this.age
    })*/

      let json = "username="+this.username+"&sex="+this.sex+"&age="+this.age
      console.log(json)
      axios.post(
          "http://127.0.01:8081/user/save",
          json
      ).then(response=>{
        console.log(response);
      }).catch(e=>{
       alert("hello")
        console.log(e)
      })

    }
  }
}

</script>

<style scoped>

</style>