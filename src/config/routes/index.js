import { useRoutes } from "react-router-dom";

import { Home } from "../../pages";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

const AppRoutes = () => {
  return useRoutes(routes);
}

export default AppRoutes;
