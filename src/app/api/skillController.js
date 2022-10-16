import { createHeaders } from './utility'

const API_URL = process.env.REACT_APP_API_URL

export const getAllSkills = async () => {
	const response = await fetch(`https://adopt-a-pal-api.herokuapp.com/api/v1/skills`)
	return await response.json()
}

export const getById = async (id) => {
	const response = await fetch(`https://lagalt-java-backend.herokuapp.com/api/v1/skills/${id}`)
	return await response.json()
}