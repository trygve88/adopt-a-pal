import React, { useEffect, useState } from "react";
import { getAllDogs, getDogsWithSkills } from "../api/dogsController";
import DogCard from "../components/dogCard/DogCard";
import SkillCheckboxes from "../components/skillCheckboxes/SkillCheckboxes";
import { useSelector } from "react-redux";
import BreedSelect from "../components/breedSelect/BreedSelect";

const Home = () => {
    const [ dogCards, setDogCards ] = useState([]);
    const filter = useSelector(state => state.filter);

    useEffect(() => {
        search() 
    },[])

    console.log(filter.skills);

    const search = async () => {
        let resopnse
        if (filter.skills.length>0) {
            resopnse = await getDogsWithSkills(filter.skills)
        }
        else {
            resopnse = await getAllDogs()
        }
        if (resopnse) {
            resopnse = resopnse.map((dog, index) => <DogCard key={index} dog={dog} />)
            setDogCards(resopnse)
        }
    }
    
	return (
        <>
        <div className="container">

            <div className="row">
                <div className="skillsPanel col-12 col-lg-3">
                    <SkillCheckboxes/>
                    <BreedSelect/>
                    <button onClick={search} className="btn btn-primary">Search</button>
                </div>

                <div className="feed col-12 col-lg-9">
                    <div className="feed-row row">
                        { dogCards }
                    </div>
                </div>
            </div>
            
        </div>
          
        </>
    )
};
export default Home