import Vue from 'vue'
import Router from 'vue-router'

import view from '../components/content-view.vue'
import bookshelf from '../components/chooseClassPage.vue'
import func from '../components/children/func.vue'

import exam from '../components/children/exam/view.vue'
import grade from '../components/children/exam/grade.vue'
import paper from '../components/children/exam/paper.vue'
import answerSheet from '../components/children/exam/answerSheet.vue'

import precision from '../components/children/precision/precision.vue'
import workBook from '../components/children/precision/workBook.vue'
import quick from '../components/children/quick/quick.vue'
import search from '../components/children/search/search.vue'
import wrong from '../components/children/wrong/wrong.vue'
Vue.use(Router)

export default new Router({
	routes: [
		{
		  path:'/',
		  name:'bookshelf',
		  component:bookshelf,
		},
		
		{
		  path:'/:subject',
		  name:'view',
		  component: view,
			children: [
			  {
			    path: 'func',
			    name: 'func',
			    component: func,
			  },
				{
				  path: 'exam',
				  name: 'exam',
				  component: exam,
					children:[
						{
							path: 'grade',
							name: 'grade',
							component: grade
						},
						{
							path: 'answerSheet',
							name: 'answerSheet',
							component: answerSheet
						},
						{
							path: 'paper',
							name: 'paper',
							component: paper
						}
					]
				},
				{
				  path: 'wrong',
				  name: 'wrong',
				  component: wrong,
				},
				{
				  path: 'quick',
				  name: 'quick',
				  component: quick,
				},
				{
				  path: 'precision',
				  name: 'precision',
				  component: precision,
				},
				{
				  path: 'workBook',
				  name: 'workBook',
				  component: workBook,
				},
				{
				  path: 'search',
				  name: 'search',
				  component: search,
				}
			]
		},
		
		]

})
