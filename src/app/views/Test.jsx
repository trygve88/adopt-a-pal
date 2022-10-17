const Test = () => {
    

    const click = () => {
        console.log("click");
        const checkBoxes = document.getElementsByClassName('skill-check')

        for (let i = 0; i < checkBoxes.length; i++) {
            if (checkBoxes[i].checked) {
                checkBoxes[i].checked = false;
            }
            else {
                checkBoxes[i].checked = true;
            }
        } 
    };

	return (
        <> 
            <li><input className="skill-check form-check-input" type="checkbox"></input> </li><br/>
            <li><input className="skill-check form-check-input" type="checkbox"></input> </li><br/>
            <button onClick={click} className="btn btn-primary">button</button> 
        </>
       
    )
};
export default Test