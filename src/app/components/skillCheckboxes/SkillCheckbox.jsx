import { useDispatch, useSelector } from "react-redux";
import { toggleSkill } from '../../redux/skillSlice';

const SkillCheckbox = ({ skill }) => {

    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const click = () => {
        dispatch(toggleSkill(`${skill.id}`))
    }

    return (
        <li className="list-group-item">
            <input className="form-check-input" 
                onClick={click}
                type="checkbox">
            </input> { skill.name } 
        </li>
    )
};
export default SkillCheckbox