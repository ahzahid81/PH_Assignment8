import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Apps from "../Components/Apps/Apps";
import Install from "../Components/Install/Install";
import AppsDetails from "../Components/AppsDetails/AppsDetails";
import ErrorAppPage from "../Components/ErrorPage/ErrorAppPage";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <>
            <Navbar></Navbar>
            <ErrorPage></ErrorPage>
            <Footer></Footer>
        </>
        ,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
            },
            {
                path: "/Apps",
                Component: Apps
            },
            {
                path: "/Install",
                Component: Install
            },
            {
                path: "/Apps/:id",
                Component: AppsDetails,
                errorElement: <ErrorAppPage></ErrorAppPage>
            }
        ]
    },
]);

