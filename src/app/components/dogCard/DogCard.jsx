import DogImage from "./DogImage";
import SkillIcon from "./SkillIcon";

const DogCard = ({ dog }) => {
    const skillIcons = []
    dog.skills.forEach(skill => {
        skillIcons.push(<SkillIcon key={skill.name} skill={skill.name}/>)
    });
 
    return (
        <div className="dog-card-col col-6 col-lg-4 col-xl-3 mb-4">
            <div className="dog-card card pb-2">
           
                <DogImage img_url={dog.img_url} />
    
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