import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./category.module.scss";
const Child=(props)=>{
    return(
        <div>
            <NavLink to={props.to} activeClassName={styles.active} className={styles.list_category_item_child}>{props.title}</NavLink>                                                        
        </div>
    )
}

export default Child;