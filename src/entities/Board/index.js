import { useCallback } from "react";
import { Container, Header } from 'semantic-ui-react';

import Column from '../Column';
import CreateColumn from '../Column/CreateColumn';
import styles from './styles.module.css';

const Board = ({ boardId, columns }) => {
  return (
    <Container fluid className={styles.container}>
      <div className={styles.header}>
        <Header as="h1" className={styles.headerTitle}>
          Kanban Dashboard
        </Header>
      </div>

      <div className={styles.board}>
        {columns.map((column) => (
          <Column
            key={column.id}
            title={column.title}
            tasks={column.cards}
          />
        ))}
        <CreateColumn boardId={boardId} onSuccess={() => {}} />
      </div>
    </Container>
  );
};

export default Board;
