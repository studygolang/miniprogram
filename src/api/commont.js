import { get } from '../utils/request'

export function getTotic(params) {
  /**
    * @description 获取主题
    * @param {string} tab 顶部tab，如果全部，可不传或all，其他使用 node name
    * @param {number} p 第几页，不传代表第1页
    */
  return get('/topics', params)
}
export function getToticDetail(params) {
  /**
    * @description 获取主题详情
    * @param {number} tid 主题id
    */
  return get('/topic/detail', params)
}

