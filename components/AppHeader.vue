
<script lang="ts">
interface treeItem {
  text: string
  id: string
}
interface RoutesTree {
  text: string
  className?: string
  children: treeItem[]
}
const routeTree: RoutesTree[] = [
  {
    text: "Home",
    children: [
       { text: 'Home', id: "/" },
    ]
  },
  {
    text: "Product",
    children: [
      { text: 'low-temp', id: "/product/low-temp" },
      { text: "high-temp", id: "/product/high-temp" },
      { text: "pupil", id: "/product/pupil" },
      { text: "safety", id: "/product/safety" },
      { text: "smokepen", id: "/product/smokepen" },
      { text: "titaniu", id: "/product/titaniu" },
    ]
  },
  {
    text: "Application",
    children: [
      { text: "Application", id: "/application" }
    ]
  },
  {
    text: "Media",
    children: [
      { text: "Dynamic", id: "/Media/dynamic" },
      { text: "Video", id: "/Media/video" },
      { text: "Trade News", id: "/Media/trade-news" },
      { text: "Literature Center", id: "/Media/literature" },
    ]
  },
  {
    text: "About",
    children: [
      { text: "About Us", id: "/about/us" },
      { text: "History", id: "/about/history" },
    ]
  },
  {
    text: "Contact",
    children: [
      { text: "Recruitment", id: "/contact/recruitment" },
      { text: "Connect", id: "/contact/connect" },
      { text: "Online Message", id: "/contact/online-message" },
    ]
  },
  {
    text: "Other",
    children: [
      { text: "partner", id: "/other/partner" },
      { text: "Blogroll", id: "/other/blogroll" },
    ]
  },
  {
    text: "Language",
    className: "custom-tree-class",
    children: [
      { text: "English", id: "en" },
      { text: "简体中文", id: "zh" }
    ]
  }
]
</script>
<script setup lang="ts">
const router = useRouter()
const activeIndex = ref<string>("home")
const showPopup = ref<boolean>(false)
const activeName = ref<string[]>(["home"])
const activeRoute = ref<string>("/")
const activeRouteIndex = ref<number>(0)
let langIds: string[] = []
onMounted(() => {
  langIds = localStorage.getItem("langIds") ?  JSON.parse(localStorage.getItem("langIds")!) : []
})
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const openPopover = () => {
  showPopup.value = true
}
// 移动端菜单切换和语言切换
const handleClickItem = (item: treeItem) => {
  console.log(item)
  if (langIds.includes(item.id)) {
    showToast(item.text);
    return
  }
  router.push({
    path: item.id
  })
}
// pc端语言切换
const handleChangeLangPc = (command: string) => { 
  if (langIds.includes(command)) {
    ElMessage.info(command);
    return
  }
}
</script>

<template>
  <div id="header">
    <div class="pc">
      <div class="w1200px margin-auto flex  space-between">
        <div class="left">
          <div class="logo" />
          <div class="by block font-size-12 vertical-align-middle">
            <p>
              <span class="animated fadeInLeft inline-block">让</span>
              <span class="animated fadeInLeft inline-block">更</span>
              <span class="animated fadeInLeft inline-block">多</span>
              <span class="animated fadeInLeft inline-block">的</span>
              <span class="animated fadeInLeft inline-block">人</span>
              <span class="animated fadeInLeft inline-block">分</span>
              <span class="animated fadeInLeft inline-block">享</span>
              <span class="animated fadeInLeft inline-block">健</span>
              <span class="animated fadeInLeft inline-block">康</span>
            </p>
            <p>
              <span class="animated fadeInLeft inline-block">Share</span>
              <span class="animated fadeInLeft inline-block">more</span>
              <span class="animated fadeInLeft inline-block">health</span>
            </p>
          </div>
        </div>
        <div class="right flex">
          <div class="tel">
            <div>
              Service Hotline
              <span class="font-size-18 block font-color-333">4008096059</span>
              <span class="font-size-18 block font-color-333">18027312199</span>
            </div>
          </div>
          <div class="qrCode-wrapper"><img class="w100Per h100Per" src="~assets/image/qrCode.jpg" alt=""></div>
          <div class="lang-wrapper">
            <el-dropdown @command="handleChangeLangPc">
              <span class="el-dropdown-link">
                Language
                <el-icon class="el-icon--right">
                  <ElIconArrowDown />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="en">English</el-dropdown-item>
                  <el-dropdown-item command="zh">简体中文</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class="w1200px margin-0-auto">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="home"><NuxtLink to="/">Home</NuxtLink></el-menu-item>
          <el-sub-menu index="product">
            <template #title>Product</template>
            <el-menu-item index="low-temp"><NuxtLink to="/product/low-temp">Low-Temp Cautery</NuxtLink></el-menu-item>
            <el-menu-item index="high-temp"><NuxtLink to="/product/high-temp">High-Temp Cautery</NuxtLink></el-menu-item>
            <el-menu-item index="pupil"><NuxtLink to="/product/pupil">Pupil Expander</NuxtLink></el-menu-item>
            <el-menu-item index="safety"><NuxtLink to="/product/safety">Safety Scalpel</NuxtLink></el-menu-item>
            <el-menu-item index="smokepen"><NuxtLink to="/product/smokepen">Smokepen</NuxtLink></el-menu-item>
            <el-menu-item index="titaniu"><NuxtLink to="/product/titaniu">Titaniu</NuxtLink></el-menu-item>
          </el-sub-menu>
          <el-menu-item index="application"><NuxtLink to="/application">Application</NuxtLink></el-menu-item>
          <el-sub-menu index="media">
            <template #title>Media</template>
            <el-menu-item index="dynamic"><NuxtLink to="/media/dynamic">Dynamic</NuxtLink></el-menu-item>
            <el-menu-item index="video"><NuxtLink to="/media/video">Video</NuxtLink></el-menu-item>
            <el-menu-item index="trade-news"><NuxtLink to="/media/trade-news">Trade News</NuxtLink></el-menu-item>
            <el-menu-item index="literature"><NuxtLink to="/media/literature">Literature Center </NuxtLink></el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="about">
            <template #title>About</template>
            <el-menu-item index="us"><NuxtLink to="/about/us">About Us</NuxtLink></el-menu-item>
            <el-menu-item index="history"><NuxtLink to="/about/history">History</NuxtLink></el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="contact">
            <template #title>Contact</template>
            <el-menu-item index="recruitment"><NuxtLink to="/contact/recruitment">Recruitment</NuxtLink></el-menu-item>
            <el-menu-item index="connect"><NuxtLink to="/contact/connect">Connect</NuxtLink></el-menu-item>
             <el-menu-item index="online-message"><NuxtLink to="/contact/online-message">Online Message</NuxtLink></el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="other">
            <template #title>Other</template>
            <el-menu-item index="partner"><NuxtLink to="/other/partner">Partner</NuxtLink></el-menu-item>
            <el-menu-item index="blogroll"><NuxtLink to="/other/blogroll">Blogroll</NuxtLink></el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
    <div class="mb">
      <div class="flex relative">
        <div class="logo-img margin-auto">
          <img class="w100Per h100Per" src="/assets/image/logo2.png" alt="">
        </div>
        <div class="menu-wrapper absolute" @click="openPopover">
          <van-icon name="wap-nav" size="30px" color="#016B6B"  />
        </div>
      </div>
      <van-popup v-model:show="showPopup" position="right" :style="{ padding: '10px', width: '70%', height: '100%' }">
        <van-tree-select
          v-model:active-id="activeRoute"
           v-model:main-active-index="activeRouteIndex"
          :items="routeTree"
          height="100vh"
          @click-item="handleClickItem"
        />
      </van-popup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.mb, .pc {
  display: none;
}
@media screen and (max-width: 768px) { 
  .mb {
    display: block;
    .logo-img {
      width: 195px;
      height: 76px;
    }
    .menu-wrapper {
      right: 20px;
      top: 28px;
    }
  }
  :deep(.van-sidebar-item:after) {
    &::last-child {
      border-bottom: none;
    }
  }
  :deep(.van-tree-select__nav ){
    flex: 1.5
  }
}
@media screen and (min-width: 769px) {
  .pc {
    display: block;
  .left {
    .logo {
      display: inline-block;
      width: 240px;
      height: 60px;
      background: url(assets/image/logo.png) no-repeat left center;
      background-size: 60%;
      font-size: 0;
      vertical-align: middle;
    }
      .by {
        letter-spacing: 2px;
        color: #666;
        font-style: italic;
        -webkit-transform: scale(0.8);
        -moz-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
      }
    }
    .right {
      .tel{
        color: #0a7070;
        font-size: 15px;
        position: relative;
        margin-top: 15px;
        &:before {
          content: "";
          position: absolute;
          left: -55px;
          font-size: 45px;
          content: "\e694";
          font-family: "iconfont" !important;
          color: #C00;
        }
        span {
          color: #333;
        }
      }
      .qrCode-wrapper {
        padding-top: 5px;
        margin-left: 30px;
        width: 102px;
        height: 93px;
      }
      .lang-wrapper{
        padding-top: 10px;
      }
    }
  }
}


</style>