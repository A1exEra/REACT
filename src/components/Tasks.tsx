/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import TaskItem from './TaskItem';
import Section from './UI/Section';
import { TASK } from '../types';
function Tasks(props: {
  items: TASK[];
  error: string | null;
  loading: boolean;
}) {
  let taskList: JSX.Element | null = (
    <h2>No tasks found. Start adding some!</h2>
  );

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task: TASK) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content: JSX.Element | string = taskList;

  if (props.error) {
    content = <h3>Error! Couldnot fetch data!</h3>;
  }

  if (props.loading) {
    content = 'Loading tasks...';
  }

  return (
    <Section>
      <Styled>{content}</Styled>
    </Section>
  );
}

const Styled = styled.div`
  text-align: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: left;
  }
  button {
    cursor: pointer;
    font: inherit;
    background-color: #7a0144;
    border: 1px solid #7a0144;
    border-radius: 20px;
    padding: 0.5rem 2rem;
    color: white;
    &:hover,
    &:active {
      background-color: #9c095a;
      border-color: #9c095a;
    }
  }
`;
export default Tasks;
