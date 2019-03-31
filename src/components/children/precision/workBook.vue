<template>
  <div>
    <div class="singleSubject" v-for="item in singleExam">
      <div class="examTitle">
        {{count+1}}:{{item.QuestionStr}}
      </div>
      <div v-for="(item, index) in singleAnswer" class="examAnswer">
        <input
          :type="inputType"
          class='checkbox'
          v-model="currentAnswer"
          :value="check[index]"
        >{{item}}
      </div>

      <div class='star'>
        <div class='onStar'>★</div>
        <div class='offStar'>☆</div>
      </div>

    </div>
    <div class="workBookFooter">
      <div class="lastSubject" @click="anotherOne(-1)">上一题</div>
      <div class="confirmAnswer" @click="confirmAnswer">确认答案</div>
      <div class="nextSubject" @click="anotherOne(1)">下一题</div>
    </div>
  </div>
</template>

<script>
  import {getText} from "../../../axios/api";
  import Question from '../../plug/tiku-question.vue'

  export default {

    name: "workBook",
    components: {
      'tk-question': Question
    },
    data() {
      return {
        count: 70,
        data: [],//全部习题
        singleExam: [],//当前习题
        singleAnswer: [],//当前答案
        inputType: 'radio',//输入框类别  保存进度需保存这个
        currentAnswer: [],
        check: ["A", "B", "C", "D"]
      }
    },

    beforeCreate() {
      //接口
      getText(1, 1).then(result => {
        this.data.push(result.data);
        this.singleExam.push(this.data[0][0]);
        this.anotherOne(0)
      }).catch(error => {
        console.log(error)
      })
    },
    methods: {

      //下一题
      anotherOne(index) {
        this.count = this.count + index;
        this.singleExam = [];
        this.singleAnswer = [];
        this.currentAnswer = [];
        this.singleExam.push(this.data[0][this.count]);
        console.log('singleExam', this.singleExam);
        console.log(this.singleExam[0].Answer);
        this.putExam()
      },

      //类型  push题的选项
      putExam() {
        if (this.singleExam[0].Mode == 'sig') {
          console.log('单选');
          this.inputType = 'radio';
          this.singleAnswer.push(
            "A.  " + this.data[0][this.count].ChoosenA,
            "B.  " + this.data[0][this.count].ChoosenB,
            "C.  " + this.data[0][this.count].ChoosenC,
            "D.  " + this.data[0][this.count].ChoosenD,
          )
        }
        if (this.singleExam[0].Mode == 'mul') {
          this.inputType = 'checkBox';
          this.singleAnswer.push(
            "A.  " + this.data[0][this.count].ChoosenA,
            "B.  " + this.data[0][this.count].ChoosenB,
            "C.  " + this.data[0][this.count].ChoosenC,
            "D.  " + this.data[0][this.count].ChoosenD,
          )
        }
        if (this.singleExam[0].Mode == 'jud') {
          this.inputType = 'radio';
          this.singleAnswer.push('是', '否')
        }
      },

      //确认答案
      confirmAnswer() {

        console.log('你的答案', this.currentAnswer);
        if (this.singleExam[0].Answer == this.currentAnswer) {
          alert('答案正确')
        }
        else {
          alert("回答错误")
        }
      }

    }
  }
</script>

<style scoped lang="scss">
  @import "../../../style/mixin";
  @import "../../../style/style.scss";

  .singleSubject {
    @include wh(93%, 13rem);
    margin-left: 3.5%;
    margin-top: 1rem;
    position: relative;
    overflow: hidden;
    background-color: white;
    border-radius: 1.7rem;
    -moz-box-shadow: 0px -3px 18px rgba(67, 64, 69, 0.46);
    -webkit-box-shadow: 0px -3px 18px rgba(67, 64, 69, 0.46);
    box-shadow: 0px -3px 18px rgba(67, 64, 69, 0.46);
    height: auto;
    color: #A4845D;

    .examTitle {
      margin: .8rem;
      padding: .5rem;
    }
    .examAnswer {
      margin-left: 1.4rem;
      padding-bottom: .7rem;

    }
  }

  .workBookFooter {
    text-align: center;
    position: absolute;
    display: flex;
    width: 100%;
    bottom: .7rem;
    .lastSubject, .confirmAnswer, .nextSubject {
      background-color: white;
      color: $tk-bc;
      font-size: 1.2rem;
      display: -moz-box; /*兼容Firefox*/
      display: -webkit-box; /*兼容FSafari、Chrome*/
      -moz-box-align: center; /*兼容Firefox*/
      -webkit-box-align: center; /*兼容FSafari、Chrome */
      -moz-box-pack: center; /*兼容Firefox*/
      -webkit-box-pack: center; /*兼容FSafari、Chrome */
      -moz-box-shadow: 0px -3px 18px rgba(67, 64, 69, 0.46);
      -webkit-box-shadow: 0px -3px 18px rgba(67, 64, 69, 0.46);
      box-shadow: 0px -3px 18px rgba(67, 64, 69, 0.46);
    }
    .lastSubject {
      float: left;
      width: 28%;
      height: 3rem;
      border-radius: .9rem .5rem .5rem .9rem;
      margin-left: 5%;
    }
    .confirmAnswer {
      height: 3rem;
      width: 30%;
      left: 20rem;
      margin: auto;
      border-radius: .5rem;
    }
    .nextSubject {
      border-radius: .5rem .9rem .9rem .5rem;
      height: 3rem;
      width: 28%;
      float: right;
      margin-right: 5%;
    }
  }

  .star {
    position: absolute;
    @include wh(6.1rem, 6.1rem);
    bottom: -3rem;
    right: -3rem;
    background-color: #e8e8e8;
    border-radius: 100%;
    & > div {
      position: absolute;
      top: 1.2rem;
      left: 1.2rem;
      line-height: 1em;
    }
  }


</style>
