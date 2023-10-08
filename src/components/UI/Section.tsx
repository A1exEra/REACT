import { ReactNode } from 'react';
import styled from 'styled-components';

function Section({ children }: { children: ReactNode }) {
  return <Styled>{children}</Styled>;
}
const Styled = styled.section`
  max-width: 40rem;
  margin: 2rem auto;
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`;
export default Section;
