import React from "react";
import { useEffect, useState } from "react";
import { getAllSkills } from "../../api/skillsController";
import SkillCheckbox from "./SkillCheckbox";

const SkillCheckboxes = ({search} ) => {
    const [ skillCheckboxes, setSkillCheckboxes ] = useState([]);

    const init = async () => { 
        let skills = await getAllSkills()
         const skillCheckboxes = skills.map((skill, index) => 
           <SkillCheckbox search={search} key={index} skill={skill} />)
        setSkillCheckboxes(skillCheckboxes)
    }

    useEffect(() => {
        init() 
    },[])

	return (
        <div className="skill-checkboxes mb-3">
            <p>Skills</p>
            { skillCheckboxes }
        </div>
    )
};
export default SkillCheckboxes