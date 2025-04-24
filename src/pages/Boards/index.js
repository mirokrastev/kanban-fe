import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { CreateBoardModal, DeleteBoardModal } from "./components";
import { boardsList } from "./sdk";

import { Dropdown, Header } from "semantic-ui-react";
import { Page } from "../../components";
import {useBoard} from "../../contexts/BoardContext";

import styles from "./styles.module.css";

const Boards = () => {
  const [boards, setBoards] = useState([]);
  const { setBoardId } = useBoard();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBoards = useCallback(async () => {
    const response = await boardsList();
    const data = await response.json();

    setBoards(data);
    setIsLoading(false);
  }, [setBoards, setIsLoading]);

  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  const handleBoardClick = (boardId) => {
    setBoardId(boardId);
    navigate(`/boards/${boardId}`);
  }

  if (isLoading) {
    return <div className={styles.boardsContainer}>Loading...</div>;
  }

  return (
    <Page>
      <Header as="h1">Your Boards</Header>
      <div className={styles.boardsGrid}>
        {boards.map((board) => (
          <div
            key={board.id}
            className={styles.boardCard}
            onClick={() => handleBoardClick(board.id)}
          >
            <div className={styles.boardHeader}>
              <h3 className={styles.boardTitle}>{board.name}</h3>
              <Dropdown
                icon="ellipsis vertical"
                direction="left"
                pointing="top right"
                className="icon"
              >
                <Dropdown.Menu>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>
                    <DeleteBoardModal board={board} onSuccess={fetchBoards} />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        ))}
        <CreateBoardModal onSuccess={fetchBoards} />
      </div>
    </Page>
  );
};

export default Boards;
