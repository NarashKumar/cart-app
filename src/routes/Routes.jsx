import { createBrowserRouter } from "react-router";
import RestaurantDetails from "../components/RestaurantDetails";
/* import OrdernEatHome from "../components/OrdernEatHome"; */
import Header from "../components/Header";
import AppLayout from "../layouts/AppLayout";
import Body from "../components/Body";
import CartPage from "../components/CartPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {index: true, element: <Body />},
            { path: "restaurant/:resId", element: <RestaurantDetails />,
                loader: ({ params }) => {
                    if (!params.resId) {
                      throw new Response("Not Found", { status: 404 });
                    }
                    return null;
                  }
             },
            { path: "cart", element: <CartPage /> }
           /*  { path: "/orderneat", element: <OrdernEatHome />}, */
        ]
    }
])