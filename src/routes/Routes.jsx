import { createBrowserRouter } from "react-router";
import RestaurantDetails from "../components/RestaurantDetails";
/* import OrdernEatHome from "../components/OrdernEatHome"; */
import Header from "../components/Header";
import AppLayout from "../layouts/AppLayout";
import Body from "../components/Body";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {index: true, element: <Body />},
            { path: "restaurant/:resId", element: <RestaurantDetails /> },
           /*  { path: "/orderneat", element: <OrdernEatHome />}, */
        ]
    }
])