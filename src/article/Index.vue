<template>
  <div class="page_article">
    <header class="header">
        <h1 class="title">
            {{ article.title }} + {{ this.$route.params.id }}
        </h1>
        <p class="desc">
            {{ article.description }}
        </p>
    </header>
    <article class="content">
        这里面是内容
    </article>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Article',
  data() {
    return {
      article: {
        author: {
          avatar: 'http://img1.3lian.com/gif/more/11/2012/03/d037a77443c0a72a1432d815cd3b5724.jpg',
          nickname: '昵称'
        },
        title: '什么是协程（goroutine），它们是怎样作的呢?',
        description: '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
        like: 6,
        comments: 10,
        id: 12,
        cover: ''
      }
    }
  }
})
</script>
<style lang="less">
.page_article {
     padding: 0 20px;
    .header {
        .title {
            color:#333;
            font-size: 34rpx;
            border-bottom: 2px solid #eee;
            padding: 10px 0;
        }
        .desc {
            color:#555;
            font-size: 30rpx;
            margin: 20px 0 30px;
        }
    }
}
</style>
