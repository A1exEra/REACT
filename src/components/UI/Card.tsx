import { ReactNode } from 'react';
import styled from 'styled-components';

const Card = (props: { className?: string; children: ReactNode }) => {
  return (
    <Styles className={`${props.className ? props.className : ''}`}>
      {props.children}
    </Styles>
  );
};

export default Card;

const Styles = styled.section`
  margin: 1rem auto;
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
`;
