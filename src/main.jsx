import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Blogs from "./pages/Blogs.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            children: [
                {index: true, element: <Home/>},
                {path: 'blogs', element: <Blogs/>},
                {path: 'bookmarks', element: <Bookmarks/>}
            ]
        },
        // {
        //     path: "bookmarks",
        //     Component: Bookmarks,
        // },
        // {
        //     path: "blogs",
        //     children: [
        //         {index: true, Component: Blogs}
        //     ],
        // },
    ]
)
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
