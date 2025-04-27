import { useRoutes, Navigate } from "react-router-dom";

import { PrivateRoute } from "../components";
import {
  KanbanBoard,
  Login,
  Register,
  Boards,
  CardDetail,
  CardEdit,
} from "../pages";

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
    path: "/boards/:id",
    element: <PrivateRoute element={<KanbanBoard />} />,
  },
  {
    path: "/cards/:id",
    element: <PrivateRoute element={<CardDetail />} />,
  },
  {
    path: "/cards/:id/edit",
    element: <PrivateRoute element={<CardEdit />} />,
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
