import { useEffect, useState } from 'react';
import { getDogById } from '../api/dogsController';
import DogCardLarge from '../components/dogCard/DogCardLarge';

const Dog = () => {
    const [ dog, setDog ] = useState([]);
   
    useEffect(() => {
        init()
    },[])

    const init = async () => {
        const dogId = window.location.pathname.split("/").pop();
        const dog = await getDogById(dogId)
        setDog(<DogCardLarge dog={dog} />)
    }

	return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                {dog}  
            </div>         
        </div>  
    )
};
export default Dog