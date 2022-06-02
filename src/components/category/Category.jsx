import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./category.module.scss";
const Category=(props)=>{
    return(
        <ul className={styles.list_category}>
            {
                props.list.map((item)=>(
                    <li key={item.id} className={styles.list_category_item}>
                        <NavLink to={`/category/${item.link}`} onClick={()=>{props.isChild(item.id)}}>
                            <span className={`${styles.icon} ${item.icon}`}></span>
                            <span>{item.title}</span>
                        </NavLink>                                                  
                    </li>
                ))
            }            
        </ul>
    )
}

export default Category;