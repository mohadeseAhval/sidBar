// import List from "./components/category/List";
import ListItem from "./components/category/ListItem";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import "./assets/style/index.scss";
import "./assets/icons/icomoon/style.scss";


const App = () => {

    return (       
       <div className="container row">
          <aside className="sideBar">
          {/* <List/> */}
          <ListItem/>
          </aside>
          <div className="main">
            <Breadcrumb/>
          </div>
       </div>
    );
};


export default App;