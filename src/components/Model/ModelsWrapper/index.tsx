import { ReactNode } from 'react';

import { Container } from './styles';



const ModelsWrapper: React.FC =({children}) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
};

export default ModelsWrapper;
