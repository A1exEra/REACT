import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { useEffect } from 'react';
import { getTokenDuration } from '../components/utils/auth';
const RootLayout = () => {
  const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }
    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);
    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === 'loading' ? <LoadingSpinner /> : <Outlet />}
      </main>
    </>
  );
};

export default RootLayout;
