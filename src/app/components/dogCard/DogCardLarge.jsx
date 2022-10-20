import React from "react";
import SkillIcon from "./SkillIcon";

const DogCardLarge = ({ dog }) => {

    const skillIcons = []
    dog.skills.forEach(skill => {
        skillIcons.push(<SkillIcon key={skill.name} skill={skill.name}/>)
    });

    return (
        <div className="text-center">
            <img src={dog.img_url} className="dog-img-large" alt="dog"/> 
            <h2 className="text-center"> { dog.name } </h2>
            <p className="text-center"> ({ dog.breed.name })</p>
            { skillIcons }
        </div>
    )
}
export default DogCardLarge;