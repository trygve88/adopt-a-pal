import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    skills: [],
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
    },
})

export const { toggleSkill } = skillSlice.actions

export default skillSlice.reducer