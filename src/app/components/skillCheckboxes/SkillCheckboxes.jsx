import React from "react";
import { useEffect, useState } from "react";
import { getAllSkills } from "../../api/skillController";
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
        <>
            <p> Skills </p>
            <p> { skillCheckboxes } </p>
        </>
    )
};
export default SkillCheckboxes