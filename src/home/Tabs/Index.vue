<template>
  <KView class="self_tabs">
    <KView class="tab_header">
      <KView
        v-for="item in tabList"
        :key="item.key"
        @click.stop="tabChang(item.key)"
        :class="item.key === activeKey?'item_active':'item'"
      >
      {{item.label}}
      <img
      class='icon' v-if="item.icon || item.activeIcon"
      :src="item.key === activeKey?item.activeIcon:item.icon"
      style="height:30rpx;width:30rpx"/>
      </KView>
    </KView>
    <kView class="content">
      <ListContent :list="actclieList" />
    </kView>
  </KView>
</template>

<script>
import Vue from 'vue'
import ListContent from '../../component/ListContent.vue'
import { getArticles } from '../../api/commont'

export default Vue.extend({
  name: 'Tabs',
  data() {
    return {
      tabList: [
        { label: '最新', key: 'newest', icon: 'http://static.gocoder.top/unfold.png', activeIcon: 'http://static.gocoder.top/unfold_active.png' },
        { label: '专栏', key: 'column' },
        { label: '付费', key: 'pay' }
      ],
      activeKey: 'newest',
      actclieList: [
        {
          author: {
            avatar: 'http://img1.3lian.com/gif/more/11/2012/03/d037a77443c0a72a1432d815cd3b5724.jpg',
            nickname: '昵称'
          },
          title: '什么是协程（goroutine），它们是怎样作的呢?,什么是协程（goroutine），它们是怎样作的呢?',
          description: '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          like: 6,
          comments: 10,
          id: 12,
          cover: ''
        },
        {
          author: {
            avatar: 'http://img1.3lian.com/gif/more/11/2012/03/d037a77443c0a72a1432d815cd3b5724.jpg',
            nickname: '昵称'
          },
          title: '什么是协程（goroutine），它们是怎样作的呢?什么是协程（goroutine），它们是怎样作的呢?什么是协程（goroutine），它们是怎样作的呢?',
          description: '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          like: 6,
          comments: 10,
          id: 13,
          cover: 'http://img1.3lian.com/gif/more/11/2012/03/d037a77443c0a72a1432d815cd3b5724.jpg'
        }
      ]
    }
  },
  components: {
    ListContent
  },
  methods: {
    tabChang(activeKey) {
      this.activeKey = activeKey
      this.$emit('onChange', activeKey)
    }
  },
  created() {
    getArticles(1).then((res) => {
      console.log(res)
    })
  }
})
</script>
<style lang="less">
.self_tabs {
  display: flex;
  flex-direction: column;
  .tab_header {
    display: flex;
    align-items: center;
    height: 88rpx;
    align-items: center;
    color: #999;
    border-bottom: 1rpx solid #f6f5f8;
    box-sizing: border-box;
    background: #fff;
    justify-content:space-around;
    .item {
      font-size: 32rpx;
      text-align: center;
      width: 120rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      position:relative;
      height: 100%;
      box-sizing: border-box;
      .icon{
        margin-left:8rpx;
      }
    };
    .item_active {
     .item;
      color: #59bf74;
      border-bottom:4rpx solid #59BF74;

    };
  };
  .content {
    flex: 1;
  }
}
</style>
