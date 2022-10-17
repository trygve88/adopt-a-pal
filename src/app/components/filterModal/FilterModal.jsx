import BreedSelect from "../filter/BreedSelect";
import SkillCheckboxes from "../filter/SkillCheckboxes";

const FilterModal = ({search}) => {
    return (
        <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <SkillCheckboxes/>
                        <BreedSelect/>
                    </div>
                    <div className="modal-footer">
                        <button onClick={search} className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default FilterModal