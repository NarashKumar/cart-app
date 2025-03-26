import Header from "../components/Header";

import { Outlet } from "react-router";
const AppLayout = () => {
    /* console.log("AppLayout Rendered");  */
    return (
        <>
            {/* <OrdernEatHome /> */}
            <Header />
            <div className="mt-30">
                <Outlet />
            </div> 
        </>
    );
};
export default AppLayout;  