<template>
    <div>
       <nav-header></nav-header>
       <nav-footer></nav-footer>
    </div>
</template>


<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'


export default{
    name: 'user',
    components:{
        NavHeader,
        NavFooter
    }
}
</script>

<style lang="scss">
@import '../assets/scss/reset.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
</style>