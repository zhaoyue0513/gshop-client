<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
    
  </div>
</template>

<script>
import TypeNav from '@/components/TypeNav'
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
export default {
  name: 'Home',
  components:{
    TypeNav,
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style lang="less" scoped>

</style>
