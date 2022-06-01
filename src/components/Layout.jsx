import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import "../assets/style/index.scss";
import "../assets/icons/icomoon/style.scss";


const Layout = ({children}) => {
    return (       
          <div className="container row">
          <aside className="sideBar">
          {children}

          </aside>
          <div className="main">
            <Breadcrumb/>
          </div>
       </div>
    );
};

export default Layout;