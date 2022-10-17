import React, { useEffect, useState } from "react";
import { getAllDogs, getDogsByFiler, getDogsWithSkills } from "../api/dogsController";
import DogCard from "../components/dogCard/DogCard";
import SkillCheckboxes from "../components/skillCheckboxes/SkillCheckboxes";
import { useSelector } from "react-redux";
import BreedSelect from "../components/breedSelect/BreedSelect";
import FilterModal from "../components/filterModal/FilterModal";

const Home = () => {
    const [ dogCards, setDogCards ] = useState([]);
    const filter = useSelector(state => state.filter);

    useEffect(() => {
        search() 
    },[])

    //console.log(filter)

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
        <>
        <div className="container">

            <div className="row">
                <div className="skillsPanel col-12 col-lg-3 d-none d-lg-block">
                    <SkillCheckboxes/>
                    <BreedSelect/>
                    <button onClick={search} className="btn btn-primary">Search</button>
                </div>

                <div className="feed col-12 col-lg-9">
                    <div className="feed-row row">
                        { dogCards }
                    </div>
                </div>

                <FilterModal/>
            </div>
            
        </div>
          
        </>
    )
};
export default Home