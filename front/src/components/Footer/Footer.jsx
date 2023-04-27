import styles from './Footer.module.css'
import React from 'react';


export default function Footer(props) {
    return (
       <div className= {styles.footerDiv}>
        
        <h4 className={styles.footerText}>Created by <span className={styles.footerName}>Juan Garona</span></h4>
       </div>
 
    );
 }