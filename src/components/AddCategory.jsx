import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');

    // const onInputChange = ({target}) => {
    //     setInputValue(target.value);
    // }
    const onInputChange = (e) => {

        setInputValue(e.target.value);
        //console.log(e.target.value);
    }

    const onSubmit = (e) => {
        //Conserva lo que se tiene en el imput al dar enter
        e.preventDefault();
        const value = inputValue.trim();
        if(value.length <= 1) return;
        //setCategorias(categorias => [inputValue, ...categorias]);
        onNewCategory(value);
        setInputValue('');
    }


  return (
    <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        //onChange={(event) => onInputChange(event)}
        onChange={onInputChange}
        />
    </form>
  )
}
