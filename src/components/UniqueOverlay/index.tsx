import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';
import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const {scrollYProgress} = useWrapperScroll()
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Burger/>
      </Header>
      <Footer style={{opacity}}>
        <ul>
          <li>
            <a href="#">UI com TypeScript</a>
          </li>
          <li>
            <a href="#">Murilo Souza</a>
          </li>
          <li>
            <a href="#">Aprendendo TypeScript</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
