<template>
  <!--写完了-->
  <div class='quick'>
    <div v-for='(unit, num1) in data'>
      <div class='title'>
        <div>第{{classesIndex}}章</div>
        <div></div>
      </div>
      <div class='question' v-for='(item, num2) in unit' :key='item.ID'>
        <tk-question
          :identify="item.ID"
          :type='item.Mode'
          :ifShowStar='true'
          :ifStar='true'
          :index='item.ID'
          :question='item.QuestionStr'
          :disable='false'
          :answer='item.Answer'
          :option='[item.ChoosenA, item.ChoosenB, item.ChoosenC, item.ChoosenD]'
          @offStar="remove(num1, num2)"
        >
        </tk-question>
      </div>
      <div class="courseFooter">到底了</div>


    </div>
  </div>
</template>

<script>
  import {getText} from "../../../axios/api";
  import Question from '../../plug/tiku-question.vue'

  export default {
    components: {
      'tk-question': Question
    },
    data() {
      return {
        text: '',
        data: [],
        classesIndex: '',
      };

    },
    beforeCreate() {
      getText(1, 1).then(result => {
        console.log(result);
        // this.text = result
        this.data.push(result.data);
        console.log(this.data);
      }).catch(error => {
        console.log(error)
      })
    },
    created(){
      this.getClasses()
    },
    methods: {
      //拿章数
      getClasses(){
        const that =this;
        console.log(that.$route.query.classIndex+"quick");
        this.classesIndex = that.$route.query.classIndex;
      },
      remove(num1, num2){
        // this.chapter[num1].questions.splice(num2, 1);
        alert("已加入错题本")
      }

    }
  }
</script>

<style lang='scss'>
  @import "../../../style/mixin";
  @import "../../../style/style.scss";

  .quick {
    .title {
      @include card(95vw, 10rem, $tk-radius);
      margin: .3rem 2.5vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2rem;
      box-sizing: border-box;
      line-height: 2.2em;
      div:first-child {

      }
      div:last-child {
        font-size: .8em;
      }
    }
    .question {
      margin: .3rem 2.5vw;
      display: inline-block;
    }
  }

  .courseFooter {

    margin-top: 2rem;
    text-align: center;
    color: white;
  }

</style>
