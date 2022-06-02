import React, { useState,useEffect} from "react";
import {NavLink,Link} from "react-router-dom";
import styles from "./category.module.scss";
import data from "../../data.json";
import Category from "./Category";
import SubCategory from "./SubCategory";
import Child from "./Child";
const Categories=()=>{
    const [childItem,setChildItem]=useState(false);
    const [child,setChild]=useState(false);
    const [parentId, setParentId] = useState(null);
    const [childId, setChildId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [parentCategory, setParentCategory] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    useEffect(() => {   
        if(loading)   {
            setParentCategory(data.data);
            setLoading(false);
        }      
    },[loading]);

    const isChild=(id)=>{
        setParentId(parseInt(id));
        setChild(true);
        setChildItem(false);

        parentCategory.map((item)=>(
            item.id === id ?
            setCategory(item):""
        ))
    }

    const isSubChild=(id)=>{
        setChildId(parseInt(id));
        setChildItem(true); 
        
        category.child.map((item)=>(
            item.id === id ?
            setSubCategory(item):""
        ))
    }

    return (
        <>
            <h5 className={styles.title__sm}>دسته ها</h5>
            
            {
                child ?
                <Link to="/" onClick={()=>{setChild(false); setParentId(null)}} className={styles.title__light}>
                    <span className={`${styles.icon__right} icon-arrow-right`}></span>
                    همه آگهی ها
                </Link>
                :""
            }  
            {
                child ? 
                <div className={styles.list_category}>                
                   <div key={category.id} className={styles.list_category_item}>
                   <NavLink to={`/category/${category.link}`} activeClassName="color_dark" onClick={()=>{isChild(category.id)}}>
                       <span className={`${styles.icon} ${parentId === category.id? "color_dark":""} ${category.icon}`}></span>
                       <span>{category.title}</span>
                   </NavLink>  
                    {category.child?.length > 0 && child &&
                        childItem ?                        
                            <div className={`${styles.list_category} pr__55 pt__20`}>
                                { parentId === subCategory.parent_id &&
                                        <div key={subCategory.id} className={`${styles.list_category_item}`}>
                                        <NavLink to={`/category/${subCategory.link}`} activeClassName="color_dark" onClick={()=>{isSubChild(subCategory.id)}}>{subCategory.title}</NavLink>
                                        {
                                            subCategory.child?.length > 0 && childItem?
                                            <div className={`${styles.list_category} pr__15 pt__20`}>
                                                {
                                                    subCategory.child.map((child)=>(
                                                        childId ===  child.parent_id ? 
                                                        <Child to={`/${child.link}`} title={child.title}/>:""
                                                    ))
                                                }                                                
                                            </div>:""
                                        }
                                    </div>                                                                                                              
                                }                                         
                            </div>:
                            <div className={`${styles.list_category} pr__55 pt__20`}>
                                {category.child.map((item)=>(  
                                    parentId === item.parent_id ?
                                    <SubCategory to={`/category/${item.link}`} title={item.title} onClick={()=>{isSubChild(item.id)}}/>:""                                                                                                              
                                ))}                                         
                            </div>                      
                        }                                   
                    </div>                       
                </div>
            :
            <Category list={parentCategory} parentId={parentId} isChild={isChild}/>
            }
        </>
    );
}

export default Categories;