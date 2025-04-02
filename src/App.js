import { BrowserRouter } from "react-router-dom";

import {AuthProvider} from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import AppRoutes from "./config/routes";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
