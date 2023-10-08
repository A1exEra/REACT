import { RefObject, useRef } from 'react';
import styled from 'styled-components';

const TaskForm = (props: {
  onEnterTask: (task: string) => void;
  loading: boolean;
}) => {
  const taskInputRef = useRef() as RefObject<HTMLInputElement>;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current!.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  };

  return (
    <Styles onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </Styles>
  );
};

const Styles = styled.form`
  display: flex;
  justify-content: space-between;

  input {
    font: inherit;
    padding: 0.25rem;
    border: none;
    border-bottom: 3px solid #ccc;
    flex: 1;
    margin-right: 2rem;
    &:focus {
      outline: none;
      border-color: #7a0144;
    }
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
export default TaskForm;
