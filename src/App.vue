<template>
  <div id="app">
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name:'app',
  component:{

  },
  data(){
    return{
      // res:''
    }
  },
  mounted(){
    // this.axios.get("/login/123").then((res) =>{
    //    this.res = res
    // })
  }
}
</script>
<style lang="scss">
@import './assets/scss/reset.scss';
</style>
