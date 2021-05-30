import Home from "./views/HomePage/HomePage";
import AdminConsole from './views/AdminConsole/Adminconsole';

const routes = [
    {
        path: "/home",
        name: "home",
        component: Home
    },
    // {
    //     path: "/about",
    //     name: "About",
    //     component: Home
    // },
    // {
    //     path: "/store",
    //     name: "Store",
    //     component: Home
    // },
    {
        path: "/admin",
        name: "Admin",
        component: AdminConsole
    },
]

export default routes;