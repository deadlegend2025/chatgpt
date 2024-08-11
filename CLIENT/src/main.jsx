import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/homepage";
import Dashbordpage from "./routes/dashboardpage/dashbordpage";
import Chatpage from "./routes/chatpage/chatpage";
import Dashboardlayout from "./layout/dashboardlayout/dashboardlayout";
import Rootlayout from "./layout/rootlayout/rootlayout";
import Signinpage from "./routes/signinpage/signinpage";
import Signuppage from "./routes/signuppage/signuppage";




const router = createBrowserRouter([
  {
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <Signinpage />,
      },
      {
        path: "/sign-up/*",
        element: <Signuppage />,
      },
      {
        element: <Dashboardlayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashbordpage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chatpage/>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
