export default {
  //改变登陆状态
  set_login (state, boolean) {
    console.log('function SET_LOGIN in mutation is called')
    state.isLogin = boolean;
  },
  //记录教师信息
  set_teacherInfo (state, teacherInfo) {
		state.teacherInfo = teacherInfo;
	}
	
}
