import { createHeaders } from './utility'

const API_URL = process.env.REACT_APP_API_URL

export const getImage = async (breed) => {
	const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const images = await response.json()
    const random = Math.floor(Math.random() * 5) + 1;
    return images.message[random]
}