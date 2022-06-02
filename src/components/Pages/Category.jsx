
import React, { useState,useEffect} from "react";
import data from "../../data.json";
const Category=(props)=>{
    const link=props.match.params.link;
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [title,setTitle]=useState();

    useEffect(() => {   
        if(loading)   {
           setCategories(data.data);
           setLoading(false);
        }      
    },[loading]);
    
        useEffect(()=>{
        if(categories){
            categories.map((item)=>{
                if( item.link === link){                
                    setTitle(item.title)               
                }
            })              
        }
    },[categories,link]);

    useEffect(()=>{
        if(categories){          
            categories.map((item)=>{               
                if(item.child){
                    item.child.map((subItem)=>{                       
                        if(subItem.link === link){                                
                            setTitle(subItem.title);                                
                        }                                            
                    })
                }
            })              
        }
    },[categories,link]);

    return(
        <>
            <h1>{title}</h1>
        </>
    )
}

export default Category;