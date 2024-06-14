import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Body from './Components/Body';
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Watch from './Components/Watch';

const AppLayout = () => (
  <div>
    <Navbar />
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
