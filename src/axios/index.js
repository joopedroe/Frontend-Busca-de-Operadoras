import Axios from 'axios'

const baseURL = 'https://search-registers.herokuapp.com'
const axios = Axios.create({
  baseURL

})

export default axios
