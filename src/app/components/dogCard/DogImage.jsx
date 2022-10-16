import { useState, useEffect } from "react";
import { getImage } from "../../api/imagesController";

const DogImage = ({breed}) => {

    const [image, setImage] = useState([])

    useEffect( () => {
        const test = async () => {
            const image = await getImage(breed)
            setImage(image)
        }
        test()
    },[])
     
    return (
        <img src={image} className="dog-img img-fluid" alt="dog"/> 
    )
}
export default DogImage;