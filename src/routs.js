import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Category from "./components/Pages/Category";
import Home from "./components/Pages/Home";

const routes = [
    { path: "/category/:link", component: Category },
    { path: "/:link", component: Breadcrumbs, exact: true },
    { path: "/", component: Home, exact: true }
]

export default routes;