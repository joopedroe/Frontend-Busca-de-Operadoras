import axios from './axios/index.js'

const search = () => axios.get('/search')

export default search
