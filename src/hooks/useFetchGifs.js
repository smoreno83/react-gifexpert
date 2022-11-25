import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";




export const useFetchGifs = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const NewImages = await getGifs(category);
        setimages(NewImages);
        setIsLoading(false);
    }

    useEffect(() => {
    
        getImages();
     
    }, [])

    return{
        //images: images,
        images,
        //isLoading: isLoading
        isLoading
    }

}
