import Home from "./views/HomePage/HomePage";
import AdminConsole from './views/AdminConsole/Adminconsole';
import Upload from './views/Upload/Upload';

const routes = [
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/upload",
        name: "Upload",
        component: Upload
    },
    {
        path: "/admin",
        name: "Admin",
        component: AdminConsole
    },
]

export default routes;