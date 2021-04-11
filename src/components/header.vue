<template>
  <div class="container-md">
    <h1>Mybatis-Vue-starter</h1>
    <div class="nav_menu w">
      <div class="menu_item">
        <div class="home">add</div>
        <router-link tag="span" to="addUser"><div class="web_home">add user</div></router-link>
      </div>
      <div class="menu_item">
        <div class="home">delete</div>
        <router-link to="deleteUser" tag="span"><div class="web_home">delete user </div></router-link>
      </div>
      <div class="menu_item">
        <div class="home">edit</div>
        <router-link to="editUser" tag="span"><div class="web_home">edit userById</div></router-link>
    </div>
      <div class="menu_item">
        <div class="home">find</div>
        <router-link to="findUser" tag="span"><div class="web_home">
            find userById</div></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'naver'
}
</script>

<style scoped>
h1 {
  display: flex;
  margin-top: 2em;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;
}
* {
  margin: 0;
  padding: 0;
}
.w {
  width: 1200px;
  margin: 20px auto;
}
.nav_menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  /* background-color: #4caf50; */
  /* border: 1px solid #ccc; */
  padding: 5px;
  color: #fff;
}
.menu_item {
  position: relative;
  flex: 1;
  height: 100%;
  line-height: 50px;
  text-align: center;
  transform-style: preserve-3d;
  transition: all 0.5s;
  /* margin: 0 5px; */
}
.menu_item:hover {
  cursor: pointer;
  transform: rotateX(90deg);
}
.home, .web_home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 300px;
}
.home {
  background-color: #4caf50;
  z-index: 11;
  transform: translateZ(25px);
}
.web_home {
  background-color: #009688;
  transform: translateY(25px) rotateX(-90deg);
}
</style>