import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import RecipeLayout from "../layouts/RecipeLayout";
import Login from "../pages/Authenticate/Login/Login";
import Register from "../pages/Authenticate/Register/Register";
import PrivateRoute from "./PrivateRoute";



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
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },

    {
       path:'/chefInfo/:id',
       element: <PrivateRoute> <RecipeLayout></RecipeLayout>  </PrivateRoute> ,
       loader: ({params}) => fetch(`http://localhost:5000/chefInfo/${params.id}`),
       errorElement: <ErrorPage></ErrorPage>
       
    }
])

export default router;