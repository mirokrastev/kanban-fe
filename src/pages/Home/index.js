import { Container } from 'semantic-ui-react';

import { Board } from '../../components/';
import data from './data';

const HomePage = () => {
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
        <Board
          columns={data}
        />
      </Container>
    </div>
  );
};

export default HomePage;
