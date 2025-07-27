import React from 'react';
import {
  createBrowserRouter,
 
} from "react-router";
import Root from '../../Pages/Root/Root';
import Error from '../../Pages/Eroor/Error';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import BookDetails from '../../Pages/BookDetails/BookDetails';
import ReadList from '../../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
   Component : Root,
   errorElement:<Error></Error>,

   children : [
    {
        index: true,
        loader: () => fetch('BookData.json'),
        path : "/",
        Component: Home
    },
    {
      path:"/about",
      Component:About
    },
    {
     path:"/readList",
     loader: () => fetch('BookData.json'),
     Component:ReadList
    },
    {
      path: '/bookDetails/:id',
       loader: () => fetch('/BookData.json'),
      Component:BookDetails
    }

   ]
   
  },
]);

