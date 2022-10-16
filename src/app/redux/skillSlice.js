import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    skills: [],
    breed: null
}

export const skillSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggleSkill: (state,action) => {
            if (state.skills.includes(action.payload)) {
                state.skills = state.skills.filter(topping => ( topping != action.payload ))
            }
            else {
                state.skills = [...state.skills, action.payload]
            }
        },
        setBreed: (state,action) => {
            state.breed = action.payload
        },
    },
})

export const { toggleSkill, setBreed } = skillSlice.actions

export default skillSlice.reducer