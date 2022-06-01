import { useState } from "react";
import styles from "./category.module.scss";

const ListItem=(props)=>{
    const [childItem,setChildItem]=useState(false);
    const [child,setChild]=useState(false);
    const [activeItem,setActiveItem]=useState();
    const [parentId, setParentId] = useState(null);
    const [childId, setChildId] = useState(null);

    const isChild=(id)=>{
        setParentId(parseInt(id));
        setChild(true);
        setChildItem(false);
    }

    const isSubChild=(id)=>{
        setChildId(parseInt(id));
        setChildItem(true);
        setActiveItem(null)
    }

    const isActive=(id)=>{
        setActiveItem(id)        
    }

    return (
        <>
            <h5 className={styles.title__sm}>دسته ها</h5>
            
            {
                child ?
                <h4 onClick={()=>{setChild(false); setParentId(null)}} className={styles.title__light}>
                    <span className={`${styles.icon__right} icon-arrow-right`}></span>
                    همه آگهی ها
                </h4>
                :""
            }  

            <ul className={styles.list_category}>
                {
                    props.parentList.map((item)=>(
                        <li key={item.id} className={styles.list_category_item}>
                            <span className={`${parentId === item.id? "color_dark":""}`} onClick={()=>{isChild(item.id)}}>
                                <span className={`${styles.icon} ${parentId === item.id? "color_dark":""} ${item.icon}`}></span>
                                <span>{item.title}</span>
                            </span>  

                            {item.child?.length > 0 && child &&
                                <ul className={`${styles.list_category} pr__55 pt__20`}>

                                    {item.child.map((itemChild)=>(  
                                         parentId === itemChild.parent_id ?
                                            <li key={itemChild.id} className={`${styles.list_category_item}`}>
                                            <span onClick={()=>{isSubChild(itemChild.id)}}>{itemChild.title}</span>

                                            {itemChild.child?.length > 0 && childItem&&
                                            <ul className={`${styles.list_category} pr__15 pt__20`}>

                                                {itemChild.child.map((children)=>(  
                                                    childId ===  children.parent_id ?                                               
                                                    <li key={children.id} onClick={(e)=>{isActive(children.id)}} className={`${styles.list_category_item_child} ${children.id === activeItem ? styles.active:""}`} >
                                                        {children.title}
                                                    </li>:""
                                                ))}                                                                                                                
                                            </ul>}                             
                                        </li>:""                                                                                                               
                                    ))}                                         
                                </ul>
                            }                    
                        </li>
                    ))
                }            
            </ul>
        </>
    );
}

export default ListItem;