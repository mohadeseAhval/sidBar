import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./category.module.scss";
const SubCategory=(props)=>{
    return(
        <div className={styles.list_category_item}>
            <NavLink to={props.to} onClick={props.onClick}>{props.title}</NavLink>                            
        </div>                                                                                                              
    )
}

export default SubCategory;