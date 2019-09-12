import {commonParams} from './config'
import {https} from 'common/js/https'

export default function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    uin: 2287969077,
    platform: 'h5',
    needNewCode: 1
  })
  return https(url, data)
}
