import { ReactNode } from 'react';
import DefaultOverLayContent from '../DefaultOverLayContent';
import {ModelsWrapper, ModelsSection} from '../Model'
import { Container } from './styles';


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
              label="Model one"
              description="Order Online for Delivery"
              />
            }
          />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
