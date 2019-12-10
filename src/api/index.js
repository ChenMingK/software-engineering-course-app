import axios from 'axios'

const BASE_URL = 'http://192.168.43.178:8080/v1'
export function login (number, password, type = 1) {
  return axios({
    method: 'post',
    url: `${BASE_URL}/user/login`,
    data: {
      number,
      password,
      type
    }
  })
}
/**
 * 201608030367
 * 666666
 */
export function register (username, password, number, type = 1) {
  return axios({
    method: 'post',
    url: `${BASE_URL}/user/register`,
    data: {
      username,
      password,
      number,
      type
    }
  })
}
/**
 * username: 'xxx',
 * password: '
 */
// export function registerStudent (info) {
//   return axios({
//     method: 'post',
//     url: `${BASE_URL}/v1/students`,
//     data: {
//       name: info.name
//     }
//   })
// }

export function getTopics () {
  return axios({
    method: 'get',
    url: `${BASE_URL}/topic`
  })
}
