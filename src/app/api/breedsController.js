import { createHeaders } from './utility'

const API_URL = process.env.REACT_APP_API_URL

export const getAllBreeds = async () => {
	const response = await fetch(`https://adopt-a-pal-api.herokuapp.com/api/v1/breeds`)
	return await response.json()
}