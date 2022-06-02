import Categories from "./Category/Ctegories";
import "../assets/style/index.scss";
import "../assets/icons/icomoon/style.scss";


const Layout = ({children}) => {
    return (       
          <div className="container row">
            <aside className="sideBar">
                <Categories/>
            </aside>
            <div className="main">                
                {children}
            </div>
       </div>
    );
};

export default Layout;