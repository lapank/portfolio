import Home from './pages/home';
import Development from './pages/development';
import Art from './pages/art';
import Management from './pages/management';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Error from "./pages/error";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";


const router = createHashRouter([
	{
	  path: "/",
	  element: <Home />,
	},
	{
		errorElement: < Error/>
	},
	{
		path: "/web-development",
		element:< Development/>
	},
	{
		path: "/art-digital-media",
		element: <Art/>
	},
	{
		path: "/product-owner-project-manager",
		element: <Management/>
	},
  ]);

  
ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
	<RouterProvider router={router} />
</React.StrictMode>
);