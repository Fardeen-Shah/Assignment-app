import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import App from '../Pages/Apps/App';
import Installation from '../Pages/Installation/Installation';
import AppDetails from '../Pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, path: "/", Component: Home },
      { path: "/apps", Component: App },
      { 
        path: "/installation", 
        Component: Installation,
        loader: () => fetch("/AppData.json")
      },
      {
        path: "/apps/app-details/:id",
        Component: AppDetails,
        loader: () => fetch("/AppData.json")
      }

    ]
  }
]);