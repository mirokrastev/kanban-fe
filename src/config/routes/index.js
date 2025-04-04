import {useRoutes} from "react-router-dom";

import {PrivateRoute} from "../../components";
import {
  Home,
  Login,
  Register
} from "../../pages"

const routes = [
  {
    path: "/",
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
