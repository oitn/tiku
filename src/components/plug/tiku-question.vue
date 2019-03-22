<template>
	<div class='tk-question'>
		<div class='q-title'>{{index}}、{{question}}</div>
		<div class='q-option' v-for='(item, i) in option'>
			<div class='q-checkbox'>
				<input :type="type" :id='i' :name='k' class='checkbox' @click='output(k)'>
				<label :for="i"><div class='q-dot'></div></label>
			</div>
			&nbsp;&nbsp;{{index}}、{{item}}
		</div>
		<div class='q-star'>
			<div class='onStar' v-show='ifStar'>★</div>
			<div class='offStar' v-show='!ifStar'>☆</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['type', 'ifshowStar', 'ifStar', 'index', 'question', 'onChoose', 'disable', 'option'],
		data() {
			return {
				k: this.question,
			};
		},
		methods:{
			output(str){
				console.log(this.k)
			}
		}
	}
</script>

<style lang='scss'>
	@import "../../style/style.scss";
	@import "../../style/mixin.scss";
	.tk-question{
		position: relative;
		@include card(95vw, auto, $tk-radius);
		padding: 1rem;
		box-sizing: border-box;
		line-height: 2.2rem;
		overflow: hidden;
		.q-title{
		}
		.q-option{
			height: 2.2rem;
			margin-left: .5rem;
			@include flex-line;
			.q-checkbox{
				position: relative;
				@include wh(1.5rem, 1.5rem);
				display: inline-block;
				input{
					@include center;
				}
				label{
					@include center;
				}
			}
		}
		.q-star{
			position: absolute;
			@include wh(6.1rem, 6.1rem);
			bottom: -3rem;
			right: -3rem;
			background-color: #e8e8e8;
			border-radius: 100%;
			&>div{
				position: absolute;
				top: 1.2rem;
				left: 1.2rem;
				line-height: 1em;
			}
		}
	}
	
	
	/* 单选 */
	input[type="radio"] {
		position: absolute;
		@include wh(1rem, 1rem);
		opacity: 0;
	}
	label {
	  position: absolute;
	  width: 1rem;
	  height: 1rem;
	  border-radius: 50%;
	  border: 1px solid $tk-bc;
	  .q-dot{
		  @include wh(.7rem, .7rem);
		  display: inline-block;
		  @include center;
		  border-radius: 100%;
	  }
	}
	input[type="radio"]:checked+label {
	  .q-dot{
		  background-color: $tk-bc;
	  }
	}
	/* 多选 */
	input[type="checkbox"] {
		position: absolute;
		@include wh(1rem, 1rem);
		opacity: 0;
	}
	input[type="checkbox"]+label {
	  position: absolute;
	  width: 1rem;
	  height: 1rem;
	  border-radius: .1rem;
	  border: 1px solid $tk-bc;
	  .q-dot{
		  @include wh(.7rem, .7rem);
		  display: inline-block;
		  @include center;
		  border-radius: .1rem;
	  }
	}
	input[type="checkbox"]:checked+label {
	  .q-dot{
		  background-color: #A4845D;
	  }
	}
		
	
</style>
