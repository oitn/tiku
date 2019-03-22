<template>
	<div class='wrong'>
		<div v-for='(chapter, num) in chapter'>
			<div class='title'>
				<div>第{{chapter.num}}章</div>
				<div>{{chapter.title}}</div>
			</div>
			<div class='question' v-for='(question) in chapter.questions' :key='question.question'>
				<tk-question 
					:type='question.type' 
					ifStar='true' 
					:index='question.index'
					:question='question.question'
					:onChoose='question.answer' 
					disable='true' 
					:option='question.option'
				>
				</tk-question>
			</div>
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
				
				chapterShow:[],
				
				chapter:[
					{
						num: 1,
						title: '你的思想有问题',
						questions:[
							{
								type: 'radio',
								index: 1,
								question: '人生观的核心是()',
								option:[
									'人生价值',
									'人生目的',
									'人生态度',
									'人生信仰'
								],
								answer: [1]
							},
							{
								type: 'checkbox',
								index: 100,
								question: '下列哪些选项内容代表了拜金主义的人生观',
								option:[
									'人生价值',
									'人生目的',
									'人生态度',
									'人生信仰'
								],
								answer: [0, 1]
							},
							{
								type: 'judeg',
								index: 150,
								question: '人的生命过程只是一个自然过程',
								answer: false
							},
						]
					},
					{
						num: 2,
						title: '你的思想依然有问题',
						questions:[
							{
								type: 'radio',
								index: 1,
								question: '人生观的核心是()',
								option:[
									'人生价值',
									'人生目的',
									'人生态度',
									'人生信仰'
								]
							},
							{
								type: 'checkbox',
								index: 100,
								question: '下列哪些选项内容代表了拜金主义的人生观',
								option:[
									'人生价值',
									'人生目的',
									'人生态度',
									'人生信仰'
								]
							},
							{
								type: 'judeg',
								index: 150,
								question: '人的生命过程只是一个自然过程'
							},
						]
					}
				]
			};
		}
	}
</script>

<style lang='scss'>
	@import "../../../style/mixin";
	@import "../../../style/style.scss";
	.wrong{
		.title{
			@include card(95vw, 10rem, $tk-radius);
			margin: .3rem 2.5vw;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 2rem;
			box-sizing: border-box;
			line-height: 2.2em;
			div:first-child{
				
			}
			div:last-child{
				font-size: .8em;
			}
		}
		.question{
			margin: .3rem 2.5vw;
			display: inline-block;
		}
	}

</style>
