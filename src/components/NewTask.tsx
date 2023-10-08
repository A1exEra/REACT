/* eslint-disable @typescript-eslint/no-explicit-any */
import TaskForm from './TaskForm';
import Section from './UI/Section';
import useHttp from '../hooks/useHTTP';
const URL = import.meta.env.VITE_URL;
function NewTask(props: {
  onAddTask: (createTask: { id: string; text: string }) => void;
}) {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
  const createTask = (taskText: string, taskData: any) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  const enterTaskHandler = async (taskText: string) => {
    sendTaskRequest(
      {
        URL: `${URL}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
}

export default NewTask;
