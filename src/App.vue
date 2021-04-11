<template>
<div class="container-md">
  <Naver></Naver>
  <router-view></router-view>
</div>
</template>
<script>
import Naver from "@/components/header";
export default {
  components: {Naver}
}
</script>

<style>
</style>

