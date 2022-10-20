import React from "react";
import { useState, useEffect } from "react";
import { getAllBreeds } from "../../api/breedsController";
import BreedOption from "./BreedOption";
import { useDispatch, useSelector } from "react-redux";
import { setBreed } from '../../redux/skillSlice';

const BreedSelect = () => {
    const [ breedOptions, setBreedOptions ] = useState([]);
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const init = async () => { 
        let breeds = await getAllBreeds()
        const breedOptions = breeds.map((breed) => <BreedOption key={breed.name} breed={breed} />)
        setBreedOptions(breedOptions)
    }

    useEffect(() => {
        init() 
    },[])

    const change = (e) => {
        dispatch(setBreed(`${e.target.value}`))
    }

	return (
        <div className="breed-select mb-3">
            <p> Breed </p>
            <select className="form-select" onChange={change}>   
                <option>any</option>
                { breedOptions }      
            </select>
        </div>
    )
};
export default BreedSelect