<template>
  <div>
    <div v-for="(course,index) in classes" class=" sectionBox"  @click="goWorkBook(index+1)">
        <div class="courseName">{{course.course}}</div>
        <div class="courseIntroduce">{{course.text}}</div>
    </div>
    <div class="courseFooter">
      到底了
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        classes: [
          {course: '第一章', text: '人生青春之问'},
          {course: '第二章', text: '坚定理想信念'},
          {course: '第三章', text: '弘扬中国精神'},
          {course: '第四章', text: '践行社会主义核心价值观'},
          {course: '第五章', text: '明大德守功德严私德'}
        ]
      };
    },
    methods: {
      goWorkBook(classNumber) {
        console.log(classNumber);
        this.$router.push({path: '/precision/workBook'});
      }

      //进度条

    }
  }
</script>

<style lang="scss" scoped>

  @import "../../../style/style.scss";
  @import "../../../style/mixin.scss";

  .sectionBox {
    background-color: #CCCCCC;
    height: 10rem;
    width: 93%;
    margin-left: 3.5%;
    border-radius: 1.3rem;
    margin-top: 1rem;
    color: $tk-bc;
    .courseName {
      position: absolute;
      margin: 3rem 2.5rem;
      font-size: 1.25rem;
    }.courseIntroduce{
           position: absolute;
           font-size: 1rem;
           margin: 6rem 2.5rem;
         }
  }

  .courseFooter{

    margin-top: 2rem;
    text-align: center;
    color: white;
  }

</style>
