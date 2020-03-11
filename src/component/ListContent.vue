<template>
  <div class="listContent">
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

export default Vue.extend({
  name: 'ListContent',
  data() {
    return {
    }
  },
  props: ['list'],
})

</script>
<style lang="less">

</style>
