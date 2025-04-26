import {useLocation, useNavigate} from "react-router-dom";
import { Button, Header, Menu } from "semantic-ui-react";

import { useAuth } from "../../contexts/AuthContext";
import {useBoard} from "../../contexts/BoardContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, setUser } = useAuth();
  const { boardId, setBoardId } = useBoard();

  const handleNavigation = () => {
    if (location.pathname.startsWith("/boards/") || !boardId) {
      navigate("/boards/");
    } else {
      navigate(`/boards/${boardId}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setBoardId(null);
    navigate("/");
  };

  if (!user) return null;

  return (
    <Menu borderless>
      <Menu.Item header onClick={handleNavigation}>
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
