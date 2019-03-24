<template>
	<div class='exam-view'>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		mounted(){
			// this.$router.push('/exam/paper')
		}
	}
</script>

<style>
	.exam-view{
		height: 100%;
	}
</style>
