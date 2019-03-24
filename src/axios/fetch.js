import axios from 'axios'

export const api = axios.create({
  baseURL:'https://exam.m.cust.edu.cn/',
  headers:{
    'Content-Type':'application/json',
    'Accept': 'application/json'
  },
  timeout: 10*1000
})
