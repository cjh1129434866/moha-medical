<template>
  <div class="app-container">
    <!-- 走马灯 -->
    <el-carousel height="540px" class="pc-swiper">
      <el-carousel-item v-for="item in bannerArr" :key="item.id">
        <img class="w100Per h100Per" :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="page-content-container margin-0-auto">
      <van-swipe class="mb-swiper" style="height: 120px;" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in bannerArr" :key="item.id">
          <img class="w100Per h100Per" :src="item.url" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script setup lang="ts">
import banner1 from "../../assets/image/banner1.png";
import banner2 from "../../assets/image/banner2.png";
import banner3 from "../../assets/image/banner3.png";
const bannerArr = [
  { id: "0", url: banner1 },
  { id: "1", url: banner2 },
  { id: "2", url: banner3 }
]
</script>

<style lang="scss" scoped>

@media screen and (max-width: 768px) {
  .pc-swiper {
    display: none;
  }
  .mb-swiper {
    display: block;
  }
}

@media screen and (min-width: 769px) {
  .mb-swiper {
    display: none;
  }
  .pc-swiper {
    display: block;
  }
}

</style>