import styles from './Card.module.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, deleteFromFavorites } from '../../redux/actions';
import { useState,useEffect } from 'react';

export default function Card(props) {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const favorites = useSelector(state => state.myFavorites)

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         dispatch(deleteFromFavorites(props.id))
      } else {
         setIsFav(true)
         dispatch(addToFavorites(props))
      }
   }

   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [favorites]);

   return (
      <div className= {styles.DivCard}>
         <div style={{display: 'flex', justifyContent: 'space-between'}}>
         <div>{
         isFav ? (
            <button className= {styles.favButton}onClick={handleFavorite}>❤️</button>
         ) : (
            <button className= {styles.favButton} onClick={handleFavorite}>🤍</button>
            )
}        </div>   
         <div><button className={styles.Boton} onClick={()=> props.onClose(props.id)}></button></div>
         </div>
         
         <Link style={{textDecoration: 'none', color: 'black'}} to={`/detail/${props.id}`}>
         <h2 className= {styles.title}>{props.name}</h2>

         <div style={{backgroundColor: '#3F979B', padding: '5px', border: '1px solid black',borderRadius: '5px', marginTop:'20px', marginBottom:'20px'}}>
         <img className={styles.CardImg}  src={props.image} alt="" />
         <div style={{display:'flex', justifyContent:'space-around'}}>
         <h2 className= {styles.subtitle}>Species: {props.species}</h2>
         <h2 className= {styles.subtitle}>Gender: {props.gender}</h2>
         </div>
         </div>
         </Link>

      </div>

   );
}




