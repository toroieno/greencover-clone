import axios from 'axios';

class Api {
  // base
  submit(method, url, data, config={}) {
    config = {
      method: method,
      url: url,
      data: method !== 'get' ? data : '',
      params: method === 'get' ? data : '',
      ...config
    }

    return axios(config)
  }

  // methods
  getAoi() {
    return this.submit('get', 'https://greencover.eofactory.ai/api/v1/aois?source=sentinel')
  }

  getMonth() {
    return this.submit('get', 'https://greencover.eofactory.ai/api/v1/imageries/months?source=sentinel&aoi_id=214')
    // return this.submit('get', 'https://greencover.eofactory.ai/api/v1/imageries/months?source=sentinel&aoi_id=215')
  }

  getData(params) {
    return this.submit('get', 'https://greencover.eofactory.ai/api/v1/imageries/statistics', params)
  }
}

export default new Api()