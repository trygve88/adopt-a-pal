import { createHeaders } from './utility'

const API_URL = process.env.REACT_APP_API_URL

export const getAllDogs = async () => {
	const response = await fetch(`https://adopt-a-pal-api.herokuapp.com/api/v1/dogs`)
	return await response.json()
}

// /withSkill?skillIds=1&
export const getDogsByFiler = async (filter) => {
	let url = "https://adopt-a-pal-api.herokuapp.com/api/v1/dogs/filter?"
	url += `filters=${filter.breed}&`
	filter.skills.forEach(skill => {
		url += `filters=${skill}&`
    });
	const response = await fetch(`${url}`)
	return await response.json()
}