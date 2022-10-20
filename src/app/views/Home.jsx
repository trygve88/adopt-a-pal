import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllDogs, getDogsByFiler } from "../api/dogsController";
import DogCard from "../components/dogCard/DogCard";
import SkillCheckboxes from "../components/filter/SkillCheckboxes";
import BreedSelect from "../components/filter/BreedSelect";

const Home = () => {
    const [ dogCards, setDogCards ] = useState([]);
    const filter = useSelector(state => state.filter);

    useEffect(() => {
        search() 
    },[])

    const search = async () => {
        let resopnse
        if ((!filter.breed || filter.breed == "any") && filter.skills.length<1) {
            resopnse = await getAllDogs()
        }
        else {
            resopnse = await getDogsByFiler(filter)
        }
        resopnse = resopnse.map((dog, index) => <DogCard key={index} dog={dog} />)
        setDogCards(resopnse)
    }
    
	return (
        <div className="row">
            <div className="skillsPanel col-12 col-lg-3">
                <SkillCheckboxes/>
                <BreedSelect/>
                <button onClick={search} className="btn btn-primary">Search</button>
            </div>

            <div className="feed col-12 col-lg-9 row">
                { dogCards }
            </div>
        </div>
    )
};
export default Home