<template>
	<div class='question'>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang = 'scss'>
	@import "style/mixin";
	@import "style/style.scss";
	.question{
		font-size: 1.2rem;
		.content{
			width: 100vw;
			min-height: 100vh;
			position: relative;
		}
	}
	*::-webkit-scrollbar
	{
	  display: none;
	}
</style>
