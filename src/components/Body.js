import React, { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";



const Body = () => {
  //const dispatch = useDispatch();
  //const navigate=useNavigate();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
