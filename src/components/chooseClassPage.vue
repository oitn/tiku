<template>
  <div class="wapper">
<!--    <div class="header">
      <tikuHeader :inputName= className></tikuHeader>
    </div> -->
		<div class="header">
			<div class='left' @click='$router.go(-1)'>&nbsp;&nbsp;<</div>
			<div class='title'>题库</div>
			<div class='right'>···&nbsp;&nbsp;</div>
		</div>


    <div class="content">

      <div class="classTag2">
        <span class="className" @click="goClassPage('军理')">军理（上）</span>
      </div>


      <div class="classTag2">
        <span class="className" @click="goClassPage('军理')">军理（下）</span>
      </div>


      <div class="classTag2">
        <span class="className" @click="goClassPage('毛概')">毛概</span>
      </div>


      <div class="classTag2"><span class="className" @click="goClassPage('近代史')">近代史</span></div>


      <div class="classTag2"><span class="className" @click="goClassPage('思修')">思修</span>
      </div>


      <div class="classTag2">
        <span class="className" @click="goClassPage('马克思')">马克思</span>
      </div>


      <div class="classTag2">
        <span class="className" @click="goClassPage('C语言（上）')"> C语言（上）</span>
      </div>


      <div class="classTag2">
        <span class="className" @click="goClassPage(' C语言（下）')"> C语言（下）</span>
      </div>

    </div>


    <div class="footer">
      <span class="footer-msg">Design By Toast Studio</span>
    </div>
  </div>
</template>

<script>
  // import tikuHeader from './tikuHeader'

  export default {
    name: "chooseClassPage",
    data() {
      return {
      className:'题库',

      }
    },
    //引入组件
    components: {
      // tikuHeader: tikuHeader,
    },
    created() {

    },
    methods: {
      goClassPage: function (name) {
        console.log(name);
        this.className = name;
				this.$router.push(name+'/func')
      },
      //遍历随机色

    }
  }
</script>

<style lang='scss' scoped>
	@import "../style/style.scss";
	@import "../style/mixin.scss";

  .wrapper {
    height: 100%;
    overflow: hidden;

  }

/*  .header {
    height: 4rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  } */
	.header{
		background-color: $tk-bc;
		position: relative;
		height: 3.5rem;
		line-height: 3.5rem;
		.left{
			position: absolute;
			color: #fff;
			left: 0;
			font-weight: bold;
		}
		.title{
			@include cl;
			color: #fff;
		}
		.right{
			position: absolute;
			color: #fff;
			right: 0;
			font-weight: bold;
		}
	}

  .content {
    position: absolute;
    top: 6rem;
    width: 93%;
    margin-left: 3.5%;
  }

  .classTag {
    /*margin-top: 1rem;*/
  }

  .classTag2 {
		
			text-align: center;
    /*border-radius: .3rem .3rem;*/
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    -moz-box-shadow: 0px -10px 18px rgba(67, 64, 69, 0.46);
    -webkit-box-shadow: 0px -10px 18px rgba(67, 64, 69, 0.46);
    box-shadow: 0px -10px 18px rgba(67, 64, 69, 0.46);
    background-color: #3487ff;
    height: 2.8rem;
  }

  .className {
    font-size: 1.3rem;
    left: 15%;

  }

  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 18rem;
    background-color: #c07a4c;
		text-align: center;
  }
	
html, body,
div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6,
p, blockquote, pre, a, abbr, acronym, address,
big, cite, code, del, dfn, em, font, img,
ins, kbd, q, s, samp, small, strike, strong,
sub, sup, tt, var, b, u, i, center, dl, dt,
dd, ol, ul, li, fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td, p {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  /*background: transparent;*/
}

</style>
