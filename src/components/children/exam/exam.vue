<template>
	<div class='exam'>
		<progress-bar :rate='77' class='grade'>
			<div class='info'>
				<div>总成绩</div>
				<div><span>77</span>分</div>
			</div>
		</progress-bar>
		<progress-bar :rate='50' class='radio'>
			<div class='info'>
				<div class='left'>单选正确率</div>
				<div class='right'>50%</div>
			</div>
		</progress-bar>
		<progress-bar :rate='67' class='checkbox'>
			<div class='info'>
				<div class='left'>多选正确率</div>
				<div class='right'>67%</div>
			</div>
		</progress-bar>
		<progress-bar :rate='80' class='judge'>
			<div class='info'>
				<div class='left'>判断正确率</div>
				<div class='right'>80%</div>
			</div>
		</progress-bar>
	</div>
</template>

<script>
	import Bar from '../../plug/progress-bar.vue'
	export default {
		components:{
		  'progress-bar': Bar
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang='scss'>
	.exam{
		.grade{
			width: 95vw;
			height: 10rem;
			margin-left: 2.5vw;
			.info{
				padding: 1.2rem 1.5rem;
				div:last-child{
					span{
						font-size: 3.2em;
					}
					text-align: center;
				}
			}
		}
		.radio, .checkbox, .judge{
			width: 95vw;
			height: 4rem;
			margin-left: 2.5vw;
			margin-top: .6rem;
			.info{
				line-height: 4rem;
				padding: 0 1.5rem;
				box-sizing: border-box;
				.left{
					display: inline-block
				}
				.right{
					display: inline-block;
					float: right;
				}
			}
		}
	}
</style>
