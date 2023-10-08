/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import TaskItem from './TaskItem';
import Section from './UI/Section';
import { TASK } from '../types';
function Tasks(props: {
  items: TASK[];
  error: { message: string } | null;
  loading: boolean;
  onFetch: () => Promise<void>;
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
    content = <button onClick={props.onFetch}>Try again</button>;
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
`;
export default Tasks;
