<template>
  <div>
    <div class="singleSubject">
      <!--<img src="../../../assets/shoucang (1).svg" alt="">-->
      <!-- <img src="../../../assets/shoucang (2).svg" alt=""> -->
    </div>
    <div class="workBookFooter">
      <div class="lastSubject">上一题</div>
      <div class="confirmAnswer">确认答案</div>
      <div class="nextSubject">下一题</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "workBook"
  }
</script>

<style scoped lang="scss">
  @import "../../../style/mixin";
  @import "../../../style/style.scss";

  .singleSubject {
    @include wh(93%, 13rem);
    margin-left: 3.5%;
    margin-top: 1rem;
    background-color: white;
    border-radius: 1.7rem;
    -moz-box-shadow: 0px -3px 18px rgba(67, 64, 69, 0.46);
    -webkit-box-shadow: 0px -3px 18px rgba(67, 64, 69, 0.46);
    box-shadow: 0px -3px 18px rgba(67, 64, 69, 0.46);
  }

  .workBookFooter {
    text-align: center;
    position: absolute;
    display: flex;
    width: 100%;
    bottom: .7rem;
    .lastSubject , .confirmAnswer ,.nextSubject {
      background-color: white;
      color: $tk-bc;
      font-size: 1.2rem;
      display: -moz-box;/*兼容Firefox*/
      display: -webkit-box;/*兼容FSafari、Chrome*/
      -moz-box-align: center;/*兼容Firefox*/
      -webkit-box-align: center;/*兼容FSafari、Chrome */
      -moz-box-pack: center;/*兼容Firefox*/
      -webkit-box-pack: center;/*兼容FSafari、Chrome */
      -moz-box-shadow: 0px -3px 18px rgba(67, 64, 69, 0.46);
      -webkit-box-shadow: 0px -3px 18px rgba(67, 64, 69, 0.46);
      box-shadow: 0px -3px 18px rgba(67, 64, 69, 0.46);
    }
    .lastSubject{
      float: left;
      width: 28%;
      height: 3rem;
      border-radius: .9rem .5rem .5rem .9rem;
      margin-left: 5%;
    }
    .confirmAnswer {
      height: 3rem;
      width: 30%;
      left: 20rem;
      margin: auto;
      border-radius: .5rem;
    }
    .nextSubject {
      border-radius: .5rem .9rem .9rem .5rem;
      height: 3rem;
      width: 28%;
      float: right;
      margin-right: 5%;
    }

  }

</style>
