import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);

    //console.log({images, isLoading});

    // const [images, setimages] = useState([]);

    // const getImages = async() => {
    //     const NewImages = await getGifs(category);
    //     setimages(NewImages);
    // }

    // useEffect(() => {
    
    //     getImages();
     
    // }, [])
    

  return (
    <> 
        <h3>{category}</h3>

        {
            isLoading && (<h2>Cargando...</h2>)
        }

        <div className="card-grid">
            {
                images.map(img => (

                //     <li key={img.id}>{img.title}</li>
                // ))
                //images.map(({ id, title}) => (
                    // <li key={id}>{title}</li>
                    <GifItem 
                    key={img.id}
                    {...img}
                    //title={img.title}
                    //url={img.url}
                    />
                ))
            }
        </div>
    </>

  )
}
