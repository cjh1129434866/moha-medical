<script setup lang="ts">

</script>

<template>
  <div id="footer">
    <div class="footer-container margin-auto">
      <div class="top flex space-between flex-wrap">
        <div class="left">
          <div>
              <span class="font-size-14 inline-block">默华医疗</span>
              <br>
              <div>
                <span  class="font-size-14 inline-block">USA MOHA MEDICAL TECHNOLOGY LTD</span>
              </div>
            </div>
          <div>
            <span  class="font-size-12 inline-block">地址：广东省广州市天河区颐和大厦17层</span><br>
            <div><span  class="font-size-12 inline-block">邮箱：MOHA@mohachina.cn</span>
            </div>
          </div>
          <div><br></div>
          <div><span class="font-size-12 inline-block">Copyright©2023 Moha Medical. All Rights Reserved. 默华医疗科技（广州）有限公司版权所有</span>
          </div>
          <div><br></div>
        </div>
        <div class="right text-align-center font-size-14 flex align-items-center flex-direction-column">
          <div class="border-span iblock">Service Hotline</div>
          <h3 style="height: 10px"></h3>
          <h3>4008096059</h3>
          <h3>18027312199</h3>
          <p>operating hours : 09:00-18:00</p>
          <p>Monday to Friday</p>
        </div>
      </div>
      <div class="clear"></div>
      <div class="bottom link">
        <ul class="flex flex-wrap">
          <li class="font-size-16">LINKS : </li>
          <li class="font-size-12"><a href="https://mp.weixin.qq.com/s/oQmwUOlKDvLvN0-I6JYRAQ" title="Recruitment Account" target="_blank">Recruitment Account</a></li>
          <li class="font-size-12"><a href="https://mp.weixin.qq.com/s/9u4zsWtzEkCEFn_eR3I4sg" title="WeChat" target="_blank">WeChat</a></li>
          <li class="font-size-12"><a href="https://www.linkedin.com/company/moha-medical/" title="Linkedin" target="_blank">Linkedin</a></li>
        </ul>
      </div>
    </div>
  </div>
  
</template>



<style lang="scss" scoped>
#footer {
  background: #016b6b;
  border-top: solid 1px #033d3d;
  padding: 20px 0;
  .left{
    width: 700px;
    color: #FFF;
    line-height: 25px;
  }
  .right {
    width: 230px;
    color: #FFF;
  }
  .left, .right {
    span {
      padding: 0 30px;
      text-transform: uppercase;
    }
    .border-span {
      padding: 5px 30px;
      border: solid 1px #FFF;
      -moz-border-radius: 15px;
      -webkit-border-radius: 15px;
      border-radius: 15px;
    }
  }
  .left {
    span {
      line-height: 30px;
    }
  }
  .right {
    h3, p{
      margin: 3px;
    }
  }

  /** link */
  .clear {
    width: 100%;
    height: 1px;
  }
  .link {
    margin-top: 20px;
    padding-top: 10px;
    height: 40px;
    line-height: 40px;
    border-top: solid 1px #035353;
    overflow: hidden;
    li {
      margin-right: 20px;
      color: #EEE;
    }
  }
}

@media screen and (max-width: 768px) { 
  #footer {
     .footer-container {
      width: 100%;
      .right {
        width: 100%;
      }
    }
  }
 
}
@media screen and (min-width: 769px) { 
   #footer {
     .footer-container {
      width: 1200px;
    }
   }
}
</style>