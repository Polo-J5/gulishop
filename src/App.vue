<template>
  <div>
    <HeaderItem></HeaderItem>
    <router-view></router-view>
    <FooterItem></FooterItem>
  </div>
</template>

<script>
import HeaderItem from '@/components/HeaderItem'
import FooterItem from '@/components/FooterItem'
export default {
  name: 'App',
  components: {
    HeaderItem,
    FooterItem
  },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>