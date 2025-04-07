import {useCallback, useEffect, useState} from "react";
import { Container, Loader } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

import { Board } from '../../entities/';
import { columnsList } from "./sdk";

const Home = () => {
  const { boardId } = useParams();
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchColumns = useCallback(async () => {
    const columns = await columnsList(boardId);
    setColumns(columns);
    setLoading(false);
  }, [boardId]);

  useEffect(() => {
    fetchColumns();
  }, [fetchColumns]);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f9fafc',
        padding: '24px'
      }}
    >
      <Container
        fluid
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        {loading ? (
          <Loader active inline='centered' />
        ) : (
          <Board
            boardId={boardId}
            columns={columns}
          />
        )}
      </Container>
    </div>
  );
};

export default Home;
