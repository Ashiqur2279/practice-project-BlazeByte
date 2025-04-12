import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import Loader from "./components/Loader.jsx";
import "./index.css";
import Blogs from "./pages/Blogs.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import Home from "./pages/Home.jsx";
// import ByteBlazeData from "../public/data/byteblaze_data.json"

const ByteBlazeData = "/data/byteblaze_data.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "blogs",
        element: <Blogs />,
        loader: async () => {
          const res = await fetch(ByteBlazeData);
          if (!res.ok) {
            throw new res("failed to data load", { status: res.status });
          }
          try {
            const data = await res.json();
            return data;
          } catch (error) {
            throw new Response(
              `Failed to parse blog data and the reason is ${error}`,
              {
                status: res.status,
              }
            );
          }
        },
      },
      { path: "bookmarks", element: <Bookmarks /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
