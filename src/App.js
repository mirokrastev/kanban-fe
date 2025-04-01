import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./config/routes";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
