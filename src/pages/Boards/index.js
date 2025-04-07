import {useState, useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';

import {CreateBoard, DeleteBoard} from './components';
import {boardsList} from "./sdk";

import styles from './styles.module.css';

const Boards = () => {
  const [boards, setBoards] = useState([]);
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
    navigate(`/board/${boardId}`);
  };

  if (isLoading) {
    return <div className={styles.boardsContainer}>Loading...</div>;
  }

  return (
    <div className={styles.boardsContainer}>
      <h1>Your Boards</h1>
      <div className={styles.boardsGrid}>
        {boards.map((board) => (
          <div 
            key={board.id} 
            className={styles.boardCard}
            onClick={() => handleBoardClick(board.id)}
          >
            <div className={styles.boardHeader}>
              <h3 className={styles.boardTitle}>{board.name}</h3>
              <DeleteBoard onSuccess={fetchBoards} board={board} />
            </div>
          </div>
        ))}
        <CreateBoard onSuccess={fetchBoards} />
      </div>
    </div>
  );
};

export default Boards; 