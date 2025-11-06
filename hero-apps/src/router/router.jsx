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

export const appsLoader = async () => {
    const res = await fetch("/AppData.json");
    if (!res.ok) throw new Response("Failed to fetch", { status: res.status });
    return res.json();
};

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
                loader: appsLoader
            },
            {
                path: "/Apps",
                Component: Apps,
                loader: appsLoader,
                errorElement: <>
                    <Navbar></Navbar>
                    <ErrorAppPage></ErrorAppPage>
                    <Footer></Footer>
                </>
            },
            {
                path: "/Install",
                Component: Install,
                loader: appsLoader,
            },
            {
                path: "/Apps/:id",
                Component: AppsDetails,
                loader: appsLoader
            }
        ]
    },
]);

