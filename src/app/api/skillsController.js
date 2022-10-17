import { createHeaders } from './utility'

const API_URL = process.env.REACT_APP_API_URL

export const getAllSkills = async () => {
	const response = await fetch(`https://adopt-a-pal-api.herokuapp.com/api/v1/skills`)
	return await response.json()
}