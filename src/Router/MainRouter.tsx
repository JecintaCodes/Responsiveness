import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import Hero from "../pages/Hero";
import Sider from "../pages/Slider";


export const mainRoute = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index: true,
       element: <Hero/>,
      },
      {
        index: true,
       element: <Sider/>
      },
    ]
  }
])