import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import RecipeLayout from "../layouts/RecipeLayout";



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
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            }
        ]
    },

    {
       path:'/chefInfo/:id',
       element: <RecipeLayout></RecipeLayout>,
       loader: ({params}) => fetch(`http://localhost:5000/chefInfo/${params.id}`),
       errorElement: <ErrorPage></ErrorPage>
       
    }
])

export default router;