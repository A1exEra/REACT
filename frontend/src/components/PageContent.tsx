import { ReactNode } from 'react';
import styled from 'styled-components';

const PageContent = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Styled>
      <h1>{title}</h1>
      {children}
    </Styled>
  );
};

export default PageContent;

const Styled = styled.div`
  text-align: center;
`;
