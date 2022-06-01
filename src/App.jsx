import React, { useState,useEffect} from "react";
import data from "./data.json";
import Layout from "./components/Layout";
import ListItem from "./components/category/ListItem";

const App = () => {
   const [loading, setLoading] = useState(true);
   const [categories, setCategories] = useState([]);

   useEffect(() => {   
      if(loading)   {
         setCategories(data.data);
         setLoading(false);
      }      
      console.log(categories);
  },[loading]);
  
    return ( 
        <Layout>
            <ListItem parentList={categories}/>                
        </Layout>
    );
};

export default App;