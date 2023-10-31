/* eslint-disable @typescript-eslint/no-explicit-any */
import Error from '../components/UI/Error';
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
  const error: any = useRouteError();
  const errorData = {
    status: 404,
    message: 'Something went wrong...',
  };
  if (error.status === 404) {
    errorData.status = 404;
    errorData.message = error.data.message;
  }
  if (error.status === 500) {
    errorData.status = 500;
    errorData.message = error.data.message;
  }
  return <Error status={errorData.status} message={errorData.message} />;
};

export default ErrorPage;
