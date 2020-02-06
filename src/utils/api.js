import axios from 'axios'
export const ROOT = 'http://demo4647863.mockable.io'
export const X_API_KEY = 'abc'

export default function callAPI(endpoint, method = 'GET', body, typeAuthor = '', accesstoken = '') {
  return axios({
    url: `${ROOT}/${endpoint}`,
    method,
    headers: {
      'access-control-request-origin': '*',
      'content-type': 'application/json',
      accept: 'application/json',
      'X-Api-Key': X_API_KEY,
      Authorization: `${typeAuthor} ` + accesstoken,
    },
    data: body,
  })
    .then(response => ({ response }))
    .catch(error => ({ error }))
}
