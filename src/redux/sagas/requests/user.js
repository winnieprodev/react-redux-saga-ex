import axios from 'axios';

export default requestGetUser() {
  return axios.request({
    method: 'GET',
    url: "https://my-json-server.typicode.com/james/cao/user"
  })
}