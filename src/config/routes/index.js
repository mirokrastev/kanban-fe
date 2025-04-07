import {useRoutes, Navigate} from "react-router-dom";

import {PrivateRoute} from "../../components";
import {
  Home,
  Login,
  Register,
  Boards
} from "../../pages"

const routes = [
  {
    path: "/",
    element: <PrivateRoute element={<Navigate to="/boards" replace />}/>
  },
  {
    path: "/boards",
    element: <PrivateRoute element={<Boards />}/>
  },
  {
    path: "/board/:boardId",
    element: <PrivateRoute element={<Home />}/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
];

const AppRoutes = () => {
  return useRoutes(routes);
}

export default AppRoutes;
