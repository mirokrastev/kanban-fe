import { Header } from "semantic-ui-react";

import Column from "../Column";
import CreateColumn from "../Column/CreateColumn";
import styles from "./styles.module.css";

const Board = ({ boardId, columns, columnsRefetch }) => {
  return (
    <>
      <Header as="h1">Kanban Dashboard</Header>

      <div className={styles.board}>
        <Header as="h3"></Header>
        {columns.map((column) => (
          <Column
            key={column.id}
            columnId={column.id}
            title={column.name}
            tasks={column.cards}
            refetchColumns={columnsRefetch}
          />
        ))}
        <CreateColumn boardId={boardId} onSuccess={columnsRefetch} />
      </div>
    </>
  );
};

export default Board;
