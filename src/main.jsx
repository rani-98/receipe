import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import{
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import HomeRoute from './routes/home.jsx';
import Root from './routes/root.jsx';
import Recipes from'./recipes.jsx';
const BrowserRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<Root/>,
      Children:[
        {
         path:"home",
         element:<HomeRoute/>
        },
        {
         path:"recipes",
         element:<Recipes/>
        },
      
      ],
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter}/>
  </React.StrictMode>

)
