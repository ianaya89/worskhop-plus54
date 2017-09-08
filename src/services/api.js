import trae from 'trae'

const api = {
  sources: []
}

api.getNews = function () {
  return trae.get('https://newsapi.org/v1/sources')
    .then((res) => {
      console.log(res)
      this.sources = res.data.sources
      return res.data
     })
    .catch((err) => { console.error(err) })
}

export default api
