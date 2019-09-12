import fetch from 'node-fetch'

export function https(url, data) {
  let param = paramConnect(data)
  url = url + '?' + param
  return new Promise((resolve, reject) => {
    fetch(url).then(res => {
      resolve(res.json())
    })
  })
}

function paramConnect(data) {
  let result = ''
  for (let i in data) {
    result += `&${i}=${data[i]}`
  }
  return result ? result.substring(1) : ''
}
