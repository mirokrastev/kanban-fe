import { Container, Header } from 'semantic-ui-react';

import Column from '../Column';
import './styles.css';

const Board = ({ columns }) => {
  return (
    <Container fluid className="container">
      <div className="header">
        <Header as="h1" className="header-title">
          Kanban Dashboard
        </Header>
      </div>

      <div className="board">
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
