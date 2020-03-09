<template>
  <div class="cnt">
    <KSwiper
      :indicator-dots="indicatorDots"
      :circular="circularFlag"
      :autoplay="autoplay"
      :duration="duration"
      :interval="interval"
    >
    <KSwiperItem
        v-for="(item,index) in background"
        :key="index" >
        <KView :class="'swiper-item '+ item">
        <img :src="bannerImg" class="banner-item"/>
        </KView>
      </KSwiperItem>
    </KSwiper>

    <tabs></tabs>
    <wx-button open-type="share" @click="onClickShare">分享</wx-button>

    <!-- 列表内容 -->
    <div v-for="(item, index) in list" :key="index" class="article_list">
      <div class="article_list_item">
        <div class="article_detail">
          <div>
            <div class="article_author">
              <img :src="item.author.avatar" alt="">
              {{item.author.nickname}}
            </div>
            <div class="article_title">
              {{item.title}}
            </div>
            <div class="article_description">
              {{item.description}}
            </div>
          </div>
          <img :src="item.cover" alt="">
        </div>
        <div class="article_other">
          <div class="acticle_goods">
            {{item.goods}}
          </div>
          <div class="acticle_comments">
            {{item.comments}}
          </div>
          <div class="acticle_share">
            分享
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'
import Web from 'reduce-loader!../common/Web.vue'
import 'reduce-loader!./web'

export default Vue.extend({
  name: 'Home',
  components: {
    Header,
    Footer,
    Web,
  },
  data() {
    return {
      interval: 2380,
      autoplay: true,
      indicatorDots: true,
      circularFlag: true,
      background: [
        'https://wechat-1251018873.file.myqcloud.com/images/banner.png',
        'https://wechat-1251018873.file.myqcloud.com/images/banner.png',
        'https://wechat-1251018873.file.myqcloud.com/images/banner.png',
      ],
      bannerImg: 'https://wechat-1251018873.file.myqcloud.com/images/banner.png',
      list: [{
        id: 1,
        author: {
          id: 1,
          nickname: '用户1',
          avatar: 'https://avatars0.githubusercontent.com/u/44227678?s=88&v=4',
        },
        title: '测试文章1的标题',
        description: '测试文章1的描述',
        cover: 'https://wechat-1251018873.file.myqcloud.com/images/banner.png',
        goods: 6,
        comments: 6,
      }, {
        id: 2,
        author: {
          id: 2,
          nickname: '用户2',
          avatar: 'https://avatars2.githubusercontent.com/u/33213215?s=80&v=4',
        },
        title: '测试文章2的标题',
        description: '测试文章2的描述',
        cover: 'https://wechat-1251018873.file.myqcloud.com/images/banner.png',
        goods: 16,
        comments: 26,
      }]
    }
  },
  created() {
    window.addEventListener('wxload', query => console.log('page1 wxload', query))
    window.addEventListener('wxshow', () => console.log('page1 wxshow'))
    window.addEventListener('wxready', () => console.log('page1 wxready'))
    window.addEventListener('wxhide', () => console.log('page1 wxhide'))
    window.addEventListener('wxunload', () => console.log('page1 wxunload'))
    if (process.env.isMiniprogram) {
      console.log('I am in miniprogram')
      // For Dean Test Passport.
      // Can delete if needed.
      wx.login({
        success(res) {
          if (res.code) {
            wx.request({
              url: 'https://mina.baobeihuijia.com/apis/oauth/v1/wechat/login',
              data: {
                code: res.code
              }
            })
          } else {
            console.log('Login failed')
          }
        }
      })
    } else {
      console.log('I am in Web')
    }
  },
  methods: {
    onClickJump() {
      window.location.href = '/test/list/123'
    },
    onClickOpen() {
      window.open('/test/detail/123')
    },
    onClickShare() {
      console.log('I am in miniprogram')
    },
  },
})
</script>

<style lang="less">
.cnt {
  margin-top: 20px;
}
a, button {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ddd;
}
.miniprogram-root {
  .for-web {
    display: none;
  }
}
    .swiper {
        margin-top: 15px;
        width: 100%;
        height: 185px;
    }
    .banner-item {
        display: block;
        margin: auto;
        height: 160px;
        border-radius: 20px;
    }
</style>
