<template>
	<div class='func'>
		<div class='container'>
			<div class='line'>
				<div class='item' @click="routerHaveParams('quick')">快速背题</div>
				<div class='item' @click="routerHaveParams('workBook')">精准背题</div>
			</div>
			<div class='line'>
				<div class='item' @click="gotoAdress('exam')">模拟考试</div>
				<div class='item' @click="gotoAdress('wrong')">错题记录</div>
			</div>
			<div class='circle' @click="gotoAdress('search')">全题搜索</div>
		</div>
		<progress-bar :rate='rate' class='bar'>
			<div class='info'>
				<div class='time'>
					<div>考试时间</div>
					<div>2019年6月2日</div>
				</div>
				<div class='progress'>{{rate}}%</div>
			</div>
		</progress-bar>
	</div>
</template>

<script>
	import Bar from '../plug/progress-bar.vue'
	export default {
		data() {
			return {
				rate: 30
			};
		},
		components:{
		  'progress-bar': Bar
		},
		methods:{
			gotoAdress(aim){
				this.$router.push('/'+this.$route.params.subject+'/'+aim)
			},
      //2=>1=>2
      routerHaveParams(aim) {
        localStorage.setItem('useType',aim);
        this.$router.push({
          name: `precision`,

        })
      }

    }
	}
</script>

<style lang='scss'>
	@import "../../style/mixin";
	@import "../../style/style.scss";
	.func{
		padding: .5rem;
		.container{
			box-sizing: border-box;
			position: relative;
			.line{
				margin-bottom: .5rem;
				justify-content: space-between;
				display: flex;
				.item{
					display: inline-block;
					@include card(48.8%, 14.5rem, 1rem);
					line-height: 14.5rem;
					text-align: center;
				}
				&:first-child{
					.item{
						&:first-child{
							border-radius: 1rem .4rem;
						}
						&:last-child{
							border-radius: .4rem 1rem;
						}
					}
				}
				&:nth-child(2){
					.item{
						&:last-child{
							border-radius: 1rem .4rem;
						}
						&:first-child{
							border-radius: .4rem 1rem;
						}
					}
				}
			}

			.circle{
				@include card(9rem, 9rem, 100%);
				text-align: center;
				line-height: 9rem;
				@include center;
				border: .5rem $tk-bc solid;
				box-shadow: none;
			}
		}
		.bar{
			@include wh(100%, 5.5rem);
			.info{
				padding: 0 1.6rem;
				box-sizing: border-box;
				display: flex;
				height: 100%;
				align-items: center;
				justify-content: space-between;
				.time{
					line-height: 1.6em;
					div:first-child{
						font-size: 1.1em;
					}
					div:last-child{
						font-size: .8em;
					}
					display: inline-block;
				}
				.progress{
					display: inline-block;
					font-size: 1.5em;
				}
			}
		}

	}


</style>
