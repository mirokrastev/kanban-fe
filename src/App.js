import { BrowserRouter } from "react-router-dom";
import {ToastContainer} from "react-toastify";

import {AuthProvider} from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import AppRoutes from "./config/routes";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <ToastContainer
          closeOnClick
          closeButton={false}
        />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
