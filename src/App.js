import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import AppRoutes from "./config/routes";
import {BoardProvider} from "./contexts/BoardContext";

function App() {
  return (
    <AuthProvider>
      <BoardProvider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
          <ToastContainer closeOnClick closeButton={false} />
        </BrowserRouter>
      </BoardProvider>
    </AuthProvider>
  );
}

export default App;
