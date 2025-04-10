import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Blogs from "./pages/Blogs.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import Home from "./pages/Home.jsx";
import AppLayout from "./components/AppLayout.jsx";
// import ByteBlazeData from "../public/data/byteblaze_data.json"

const ByteBlazeData = '/data/byteblaze_data.json'
const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout/>,
            children: [
                {index: true, element: <Home/>},
                {
                    path: 'blogs', element: <Blogs/>, loader: async () => {
                        const res = await fetch(ByteBlazeData);
                        if (!res.ok) {
                            throw new res("failed to data load", {status: res.status})
                        }
                        const data = await res.json()
                        return data;
                    }
                },
                {path: 'bookmarks', element: <Bookmarks/>}
            ]
        },
    ]
)
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
