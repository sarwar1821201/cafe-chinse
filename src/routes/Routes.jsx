import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";



const router= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;