type UrlTypes = 'users' | 'leads'

const get = (url: UrlTypes) => {
  const data = window.localStorage.getItem(url)
  return JSON.parse(data || '[]')
}

const post = (url: UrlTypes, data: any) => {
  const parsed_data = JSON.stringify(data)
  return window.localStorage.setItem(url, parsed_data)
}

const api = { get, post }

export { get, post }

export default api
