import { RouterProvider } from "react-router-dom"
import { mainRoute } from "./Router/MainRouter"


const App = () =>{
    return(
    <div>
    <RouterProvider router={mainRoute}/>
    </div>
    )
}

export default App