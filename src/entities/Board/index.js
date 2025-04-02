import { Container, Header } from 'semantic-ui-react';

import Column from '../Column';
import styles from './styles.module.css';

const Board = ({ columns }) => {
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
            tasks={column.tasks}
          />
        ))}
      </div>
    </Container>
  );
};

export default Board;
