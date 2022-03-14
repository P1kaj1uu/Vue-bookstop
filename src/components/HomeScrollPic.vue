<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(hotSellGoods, index) in hotSellRecommend" :key="index"> 
            <div>
            <a :href="hotSellGoods.url" target="_blank">
                <img :src="hotSellGoods.goodsPicture" class="swiper-img"/>
                <h3>{{hotSellGoods.name}}</h3>
            </a>
            </div>
        </div>
        </div>
        <div class="left_btn swiper-button-prev">
        <i class="el-icon-arrow-right"></i>
        </div>
        <div class="right_btn swiper-button-next">
        <i class="el-icon-arrow-left"></i>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  data() {
    return {
        hotSellRecommend:[
        {
          goodsPicture:'/5.jpg',
          name:'码农翻身',
          url:'https://item.jd.com/12364204.html'
        },
        {
          goodsPicture:'/8.jpg',
          name:'Vue.js项目实战',
          url:'https://item.jd.com/12513396.html'
        },
        {
          goodsPicture:'/3.jpg',
          name:'JavaScript权威指南',
          url:'https://item.jd.com/10974436.html'
        },
        {
          goodsPicture:'/6.jpg',
          name:'正则表达式必知必会',
          url:'https://item.jd.com/12652504.html'
        },
        {
          goodsPicture:'2.jpg',
          name:'算法图解',
          url:'https://item.jd.com/12911513.html'
        },
        {
          goodsPicture:'7.jpg',
          name:'深入理解计算机系统',
          url:'https://item.jd.com/12006637.html'
        },
        {
          goodsPicture:'1.jpg',
          name:'Python编程从入门到实践',
          url:'https://item.jd.com/11993134.html'
        },
        {
          goodsPicture:'4.jpg',
          name:'高性能MySQL',
          url:'https://item.jd.com/11220393.html'
        }
      ]
    };
  },
  mounted() {
    this.getHotSellRecommendGoodsData();
  },
  methods: {
    //获取数据之后渲染
    getHotSellRecommendGoodsData() {
      this.$nextTick(() => {
          /* eslint-disable no-new */
          new Swiper('.swiper-container', {
            direction: 'horizontal', // 水平切换选项
            loop: true, // 循环模式选项
            autoplay: true,//可选选项，自动滑动
            speed:3000, //切换次数
            slidesPerView: 4, //一行4个
            spaceBetween: 5, //每个中间隔15px
            prevButton:'.swiper-button-prev', //上一张
            nextButton:'.swiper-button-next', //下一张
          })
      })
    }
  }
};
</script>

<style scoped>
.swiper-container {
    width: 98%;
    margin-left: 17px;
    display: flex;
    align-items: baseline;
    position: relative;
}
.swiper-img{
  width: 230px;
  height: 155px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.swiper-slide h3{
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
}
.left_btn {
  width: 29px;
  height: 36px;
  background: rgba(71,71,71,0.12);
  border-radius: 0px 12px 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8d8d8d;
  font-size: 5px;
  position: absolute;
  top: calc(50% - 18px);
  left: -3px;
  cursor: pointer;
  z-index: 9;
}
.right_btn {
  width: 29px;
  height: 36px;
  background: rgba(71,71,71,0.12);
  border-radius: 12px 0px 0px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8d8d8d;
  font-size: 5px;
  position: absolute;
  top: calc(50% - 18px);
  right: 0px;
  cursor: pointer;
  z-index: 9;
}
</style>
