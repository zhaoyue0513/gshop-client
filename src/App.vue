<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import reqCategoryList from '@/api'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  // mounted(){
  //   //异步获取三级分类列表
  //   getCategoryList().then(result =>{
  //     console.log('result',result);
  //   }).catch(err=>console.log(err))
  // }
  mounted(){
    // reqCategoryList().then(result => {
    //   console.log(result)
    // })
    //分发请求获取分类列表的异步action
    this.$store.dispatch('getCategoryList')
  }

}
</script>

<style lang="less" scoped>

</style>
