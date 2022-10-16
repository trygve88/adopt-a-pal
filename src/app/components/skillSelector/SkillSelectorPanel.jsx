import { useEffect, useState } from "react";
import { getAllSkills } from "../../api/skillController";
import SkillSelector from "./SkillSelector";
import React from "react";

const SkillSelectorPanel = ({search} ) => {
    const [ skillSelectorList, setSkillSelectorList ] = useState([]);

    const init = async () => { 
        let skills = await getAllSkills()
        const skillSelectorList = skills.map((skill, index) => 
            <SkillSelector search={search} key={index} skill={skill} />)
        setSkillSelectorList(skillSelectorList)
    }

    useEffect(() => {
        init() 
    },[])

	return (
        <>
            <p> Skills </p>
            <p> { skillSelectorList } </p>
        </>
    )
};
export default SkillSelectorPanel