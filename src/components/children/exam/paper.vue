<template>
	<div class='paper'>
		<tk-question 
			type='jud' 
			:ifShowStar='false' 
			index='1'
			question='HelloWorld'
			:disable='false' 
			:option='["hello", "a", "bcd"]'
			@change="getAnswer"
		>
		</tk-question>
		<div>{{answer}}</div>
		<br>
		<div class='footer'>
			<div>上一题</div>
			<div>下一题</div>
		</div>
	</div>
</template>

<script>
	import Question from '../../plug/tiku-question.vue'
	export default {
		components:{
			'tk-question': Question
		},
		data() {
			return {
				answer:'未知'
			}
		},
		methods:{
			getAnswer(res){
				this.answer = res
			}
		}
	}
</script>

<style lang='scss'>
	.paper{
		/* height: calc(100vh - 3.5rem); */
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		.footer{
		}
	}
</style>
