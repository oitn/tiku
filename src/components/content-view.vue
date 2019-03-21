<template>
	<div class='view'>
		<div class="header">
			<div class='left' @click='$router.go(-1)'>&nbsp;&nbsp;<</div>
			<div class='title'>{{subject}}</div>
			<div class='right'>···&nbsp;&nbsp;</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		computed:{
			subject: function(){
				return this.$route.params.subject
			}
		},
		data() {
			return {
			};
		}
	}
</script>

<style lang = 'scss'>
	@import "../style/style.scss";
	@import "../style/mixin.scss";
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
	.view{
		background-color: $tk-bc;
		position: relative;
		@include wh(100%, auto);
		min-height: calc(100vh);
	}
</style>
