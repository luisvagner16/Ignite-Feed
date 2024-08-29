import React from "react";
import styles from './sidebar.module.css';
import { PencilLine } from 'phosphor-react'
import { Avatar } from "./Avatar";


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1622674448553-7de7c30e9675?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
            className={styles.capa} />

            <div className={styles.profile}>
                <Avatar  src="https://media.licdn.com/dms/image/v2/D4D03AQHqj82yV5mYhw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723884237723?e=1730332800&v=beta&t=wYthFa6ACpj3m7ZV5jIaQd-9AOmsBfdg2oQMPQbIaIM"/>

                <strong>Reinaldo Pedro</strong>
                <span>CyberSecurity Engineer</span>
            </div>

            <footer>
                
                <a href="$">
                <PencilLine size={20}/>
                    Editar seu perfil</a>
            </footer>


        </aside>
    )
}