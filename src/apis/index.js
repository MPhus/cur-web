import axios from 'axios'
import { API_CITY } from '~/untils/contant'
export const fetchCityAPI = async () => {
	const response = await axios.get(`${API_CITY}`)
	return response.data
}