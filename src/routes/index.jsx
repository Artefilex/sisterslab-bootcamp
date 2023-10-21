import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts";
import Home from "../Home";
import Week2 from "../components/week2";
import Week1 from "../components/week1";
import Week3 from "../components/week3";

const routes = createBrowserRouter([
    {
        path: "/",
       element: <MainLayout/>,
       children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path:"/week1",
            element: <Week1/>
        },
        {
            path:"/week2",
            element: <Week2/>
        },
        {
            path:"/week3",
            element: <Week3/>
        }
       ]
    }
])



export default routes