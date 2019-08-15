import request from '@/utils/request.js'

export function index() {
  request.get('/index')
}