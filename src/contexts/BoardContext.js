import { createContext, useContext, useState } from "react";

const BoardContext = createContext(null);

export const BoardProvider = ({ children }) => {
  const [boardId, setBoardId] = useState(null);

  return (
    <BoardContext.Provider value={{ boardId, setBoardId }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);
