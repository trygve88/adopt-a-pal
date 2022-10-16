import React from "react";
import { useState, useEffect } from "react";
import { getAllBreeds } from "../../api/breedsController";
import BreedOption from "./BreedOption";

const BreedSelect = () => {
    const [ breedOptions, setBreedOptions ] = useState([]);

    const init = async () => { 
        let breeds = await getAllBreeds()
        const breedOptions = breeds.map((breed) => <BreedOption key={breed.name} breed={breed} />)
        setBreedOptions(breedOptions)
    }

    useEffect(() => {
        init() 
    },[])
  
	return (
        <div className="mb-3">
            <p> Breed </p>
            <select className="form-select" name="" id="">   
                { breedOptions }      
            </select>
        </div>
    )
};
export default BreedSelect