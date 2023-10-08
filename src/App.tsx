/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/globalStyles';
import theme from './assets/styles/theme';
import { useState, useEffect } from 'react';
import NewTask from './components/NewTask';
import Tasks from './components/Tasks';
import { TASK } from './types';
import useHttp from './hooks/useHTTP';
const URL = import.meta.env.VITE_URL;
function App() {
  const [tasks, setTasks] = useState<TASK[]>([]);
  // const transformTaks = useCallback((tasksObj: TASK[]) => {
  //   const loadedTasks = [];

  //   for (const taskKey in tasksObj) {
  //     loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
  //   }

  //   setTasks(loadedTasks);
  // }, []);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    console.log('APP_USEEFFECT');
    const transformTaks = (tasksObj: TASK[]) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        URL: `${URL}`,
      },
      transformTaks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task: TASK) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NewTask onAddTask={taskAddHandler} />
        <Tasks items={tasks} loading={isLoading} error={error} />
      </ThemeProvider>
    </>
  );
}

export default App;
