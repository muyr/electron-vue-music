import fetch from 'node-fetch'

export function https(url, data) {
  let param = paramConnect(data)
  url += (url.indexOf('?') < 0 ? '?' : '&') + param
  return new Promise((resolve, reject) => {
    fetch(url).then(res => {
      resolve(res.json())
    })
  })
}

function paramConnect(data) {
  let result = ''
  for (let i in data) {
    let value = data[i] !== undefined ? data[i] : ''
    result += `&${i}=${value}`
  }
  return result ? result.substring(1) : ''
}
