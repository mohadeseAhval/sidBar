import React, { useState,useEffect} from "react";
import data from "../../data.json";
import styles from "./Breadcrumbs.module.scss";
const Breadcrumbs=(props)=>{
    const link=props.match.params.link;
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [title,setTitle]=useState([{parentCategory:null,subCategory:null,child:null}]);

    useEffect(() => {   
        if(loading)   {
           setCategories(data.data);
           setLoading(false);
        }      
    },[loading]);

    useEffect(()=>{
        if(categories){          
            categories.map((item)=>{               
                if(item.child){
                    item.child.map((subItem)=>{    
                        if(subItem.child){
                            subItem.child.map((child)=>{
                                if(child.link === link){   
                                    if(child.parent_id === subItem.id && subItem.parent_id === item.id)  {                                                                             
                                        setTitle(prevState => ({...prevState, parentCategory:item.title,subCategory:subItem.title, child:child.title}));
                                    }                                   
                                }
                            })
                        }                                                                                       
                    })
                }
            })              
        }
    },[categories,link])

    return(
        <>
            <ul className={styles.breadcrumb}>
                <li className={styles.breadcrumb_item}>{title.parentCategory}</li>
                <li className={styles.breadcrumb_item}>{title.subCategory}</li>
                <li className={styles.breadcrumb_item}>{title.child}</li>
            </ul>                  
        </>
    )
}

export default Breadcrumbs;