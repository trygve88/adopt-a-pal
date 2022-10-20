import React from "react";
import Icon from "./Icon";

const DogCardLarge = ({ dog }) => {

    const icons = []
    dog.skills.forEach(skill => {
        icons.push(<Icon key={skill.name} skill={skill.name}/>)
    });

    return (
        <>
            <img src={dog.img_url} className="dog-img-large" alt="dog"/> 
            <h2 className="text-center"> { dog.name } </h2>
            <p className="text-center"> ({ dog.breed.name })</p>

            <div className="dog-skills mx-auto d-inline">
                { icons }
            </div>
        </>
    )
}
export default DogCardLarge;