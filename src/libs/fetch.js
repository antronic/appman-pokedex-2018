let fetch = window.fetch

if (!window.fetch) {
  fetch = require('../vendor/fetch/fetch')
  window.fetch = fetch
}

export function get(url) {
  return fetch(url, {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    // headers: {
    //   'content-type': 'application/json'
    // },
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
}

export function post(url, data, headers = {}) {
  return fetch(url, {
    body: data,
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers,
    // headers: {
    //   'content-type': 'application/json'
    // },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    // referrer: 'no-referrer', // *client, no-referrer
  })
}

export default fetch