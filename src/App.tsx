/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/globalStyles';
import theme from './assets/styles/theme';
import { useState, useEffect } from 'react';
import NewTask from './components/NewTask';
import Tasks from './components/Tasks';
import { TASK } from './types';
const URL = import.meta.env.VITE_URL;
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [tasks, setTasks] = useState<TASK[]>([]);
  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${URL}hooks.json`);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err: Error | any) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task: TASK) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NewTask onAddTask={taskAddHandler} />
        <Tasks
          items={tasks}
          loading={isLoading}
          error={error}
          onFetch={fetchTasks}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
