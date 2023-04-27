import styles from './SearchBar.module.css'
import {useState} from 'react'

export default function SearchBar(props) {

   const [character, setCharacter] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(character);
  };

  const handleChange = (event) => {
   setCharacter(event.target.value);
  };


   return (
      <div className={styles.SearchDiv}>
         <input 
         className={styles.Input} type='search' 
         onChange={handleChange} 
         placeholder='Enter character ID' 
         />
      <button className={styles.Boton} onClick={handleSubmit}>Agregar</button>
      </div>
   );
}