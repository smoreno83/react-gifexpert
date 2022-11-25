//No es necesario desde la version 16 estar importando react
//import React from 'react'

import { useState } from "react"
import { AddCategory, GifGrid } from "./components";
//import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categoria, setCategorias] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {

        //2 formas de hacerlo
        // setCategorias([...categoria, 'Valorant']);
        //setCategorias(cat => [...cat, 'Valorant']);

        if( categoria.includes(newCategory) ) return;

        setCategorias([newCategory, ...categoria]);
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
        // setCategorias={setCategorias} 
        onNewCategory={onAddCategory}
        />

        {/* Listado de Gif */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}

        {
            categoria.map( cate => (
                <GifGrid key={cate} category={cate}/>

            ))
        }

            {/* Gif Item */}
    </>
  )
}
