import {api} from "./fetch"


//拉取试题
export function getText(que, unit) {
  // que=0;
  // unit=0;
  return api.get("queReturnByUnit.ashx?que="+que+"&unit=" +unit)

}
//https://exam.m.cust.edu.cn/queReturnByUnit.ashx?que=1&unit=2
//return api.get("https://exam.m.cust.edu.cn/queReturnByUnit.ashx?"+"que="+que +"unit="+unit )
