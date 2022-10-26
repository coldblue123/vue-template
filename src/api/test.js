import request from '@/utils/request'

export function g2LinData(params) {
  return request({
    url: 'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
    method: 'get',
    params
  })
}
