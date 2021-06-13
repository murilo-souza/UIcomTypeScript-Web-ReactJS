import React from 'react';
import DefaultOverLayContent from '../DefaultOverLayContent';
import {ModelsWrapper, ModelsSection} from '../Model'
import { Container, Spacer } from './styles';
import UniqueOverlay from '../UniqueOverlay'

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model one',
            'Model two',
            'Model three',
            'Model four',
            'Model five',
            'Model six',
            'Model seven',
          ].map(modelName =>(
            <ModelsSection
            key={modelName}
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverLayContent
              label={modelName}
              description="Order Online for Delivery"
              />
            }
          />
          ))}
        </div>
        <Spacer/>
        <UniqueOverlay/>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
