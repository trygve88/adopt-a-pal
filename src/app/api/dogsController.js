import { createHeaders } from './utility'

const API_URL = process.env.REACT_APP_API_URL

export const getAllDogs = async () => {
	const response = await fetch(`https://adopt-a-pal-api.herokuapp.com/api/v1/dogs`)
	return await response.json()
}

// /withSkill?skillIds=1&
export const getDogsWithSkills = async (ids) => {
	let url = "https://adopt-a-pal-api.herokuapp.com/api/v1/dogs/withSkill?"
	ids.forEach(id => {
		url += `skillIds=${id}&`
    });
	const response = await fetch(`${url}`)
	return await response.json()
}