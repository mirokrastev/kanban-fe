import { useNavigate } from "react-router-dom";
import { Button, Header, Menu } from "semantic-ui-react";

import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  if (!user) return null;

  return (
    <Menu borderless>
      <Menu.Item header onClick={() => navigate("/boards")}>
        <Header as="h2" style={{ cursor: "pointer", margin: 0 }}>
          Kanban
        </Header>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button negative onClick={handleLogout}>
            Logout
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
