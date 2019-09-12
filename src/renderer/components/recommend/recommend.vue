<template>
    <div>
        推荐页面
    </div>
</template>

<script type="text/ecmascript-6">
  import getRecommend from '@/api/recommend'

  export default {
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then(data => {
          console.log(data)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
