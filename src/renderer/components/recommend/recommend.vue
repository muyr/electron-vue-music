<template>
    <div class="recommend">
        <div class="recommend-content">
            <div v-if="this.sliderList.length" class="slider-wrapper">
                <slider>
                    <div v-for="item in this.sliderList">
                        <a :href="item.linkUrl">
                            <img :src="item.picUrl">
                        </a>
                    </div>
                </slider>
            </div>
            <div class="recommend-list">
                <h1 class="list-title">热门歌单推荐</h1>
                <ul>
                    <li v-for="item in this.songList" class="item">
                        <div class="icon">
                            <img width="60" height="60" :src="item.picUrl"/>
                        </div>
                        <div class="text">
                            <h2 class="name" v-html="item.songListAuthor"></h2>
                            <p class="desc" v-html="item.songListDesc"></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import getRecommend from '@/api/recommend'
  import {ERR_OK} from '@/api/config'
  import Slider from '@/base/slider/slider'

  export default {
    data() {
      return {
        sliderList: [],
        songList: []
      }
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then(res => {
          if (res.code === ERR_OK) {
            this.sliderList = res.data.slider
            this.songList = res.data.songList
          }
        })
      }
    },
    components: {
      Slider
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
