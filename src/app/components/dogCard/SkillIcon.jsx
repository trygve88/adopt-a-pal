const SkillIcon = ({skill}) => {
    return (
        <div className="p-2 d-inline">
            <img src={`${skill}.png`} alt={skill} style={{width:'30px'}}/>
        </div>   
    )
}
export default SkillIcon;