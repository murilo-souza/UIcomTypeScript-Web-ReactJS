import { ReactNode } from 'react';
import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  modelName: string
  overlayNode:React.ReactNode
}

const ModelsSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  return (
    <Container {...props}>{children}</Container>
  );
};

export default ModelsSection;
