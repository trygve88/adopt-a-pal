const SkillIcon = ({skill}) => {

    console.log(skill);

    return (
        <div className="p-2 d-inline">
            <img src={`/${skill}.png`} alt={skill} style={{width:'25px'}}/>
        </div>   
    )
}
export default SkillIcon;