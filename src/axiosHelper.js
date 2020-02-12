import axios from 'axios'

class AxiosHelper {
  build() {
    const api = this._configAxios()
    return api
  }

  _configAxios() {
    const options = {
      baseURL: process.env.REACT_APP_API_URL,
    }
    const client = axios.create(options)

    return client
  }
}

export default AxiosHelper
