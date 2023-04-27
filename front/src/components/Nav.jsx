import SearchBar from "./SearchBar/SearchBar";

import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css'

export default function Nav(props) {
    return (
       <div style= {{margin: 'auto',backgroundColor: '#F9F54B', borderRadius:'5px', display:'flex', justifyContent:"space-between", maxWidth:'1500px', flexWrap:'wrap'}}>
         <div className={styles.NavDiv}>
         <NavLink style={{textDecoration: 'none', color: 'black'}} to='/home'>
            <span className={styles.NavItem}>Home</span>
         </NavLink>
         <NavLink style={{textDecoration: 'none', color: 'black'}} to='/favorites'>
            <span className={styles.NavItem}>Favourites</span>
         </NavLink>
         <NavLink style={{textDecoration: 'none', color: 'black'}} to='/about'>
            <span className={styles.NavItem}>About</span>
         </NavLink>
         <NavLink style={{textDecoration: 'none', color: 'black'}} to='/'>
            <span className={styles.NavItem}>Logout</span>
         </NavLink>
         </div>
        <SearchBar 
          onSearch={props.onSearch}
        />
       </div>
    );
 }