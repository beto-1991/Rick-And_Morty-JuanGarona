import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         <div className= {styles.DivCards}>
            {
            characters.map((char)=>{
            return <Card 
            name= {char.name} 
            species= {char.species} 
            gender= {char.gender}
            image= {char.image}
            onClose= {props.onClose}
            id= {char.id}
            origin= {char.origin}
            />
            })}
         </div>
   </div>);
}