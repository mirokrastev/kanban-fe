import { useRoutes, Navigate } from "react-router-dom";

import { PrivateRoute } from "../components";
import { KanbanBoard, Login, Register, Boards } from "../pages";

const routes = [
  {
    path: "/",
    element: <PrivateRoute element={<Navigate to="/boards" replace />} />,
  },
  {
    path: "/boards",
    element: <PrivateRoute element={<Boards />} />,
  },
  {
    path: "/boards/:boardId",
    element: <PrivateRoute element={<KanbanBoard />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
