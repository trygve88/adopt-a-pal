import React from "react";
import { useNavigate } from "react-router-dom";
import SkillIcon from "./SkillIcon";

const DogCard = ({ dog }) => {

    const navigate = useNavigate();

    const handleClick = async () => {
        navigate(`/dog/${dog.id}`)
    }

    const skillIcons = []
    dog.skills.forEach(skill => {
        skillIcons.push(<SkillIcon key={skill.name} skill={skill.name}/>)
    });
 
    return (
        <div onClick={handleClick} className="dog-card-col col-6 col-lg-4 col-xl-3 mb-4">
            <div className="dog-card card pb-2">
        
                <img src={dog.img_url} className="dog-img" alt="dog"/> 

                <div className="dog-name mx-auto">
                    <p> { dog.name } ({ dog.breed.name })</p>
                </div>
                
                <div className="dog-skills mx-auto d-inline">
                    { skillIcons }
                </div>
            </div> 
        </div> 
    )
}
export default DogCard;