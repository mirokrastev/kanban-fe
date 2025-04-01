import {useCallback, useEffect, useState} from "react";
import { Container, Loader } from 'semantic-ui-react';

import { Board } from '../../entities/';
import { columnsList } from "./sdk";

const HomePage = () => {
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchColumns = useCallback(async () => {
    const columns = await columnsList();
    setColumns(columns);

    setLoading(false);
  }, []);

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
            columns={columns}
          />
        )}
      </Container>
    </div>
  );
};

export default HomePage;
