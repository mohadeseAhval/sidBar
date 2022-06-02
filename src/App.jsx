import React from "react";
import {Route,Switch} from "react-router-dom";
import routes from "./routs";
import Layout from "./components/Layout";

const App = () => {
    return ( 
        <Layout>
            <Switch>
                {routes.map((route)=>(
                    <Route {...route}/>
                ))}
            </Switch>      
        </Layout>
    );
};

export default App;