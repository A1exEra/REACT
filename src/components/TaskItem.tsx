import { ReactNode } from 'react';
import styled from 'styled-components';

function TaskItem(props: { children: ReactNode }) {
  return <Styled>{props.children}</Styled>;
}
const Styled = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.25rem;
  &:last-of-type {
    border-bottom: none;
  }
`;
export default TaskItem;
