import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
import LoadingSpinner from '../components/UI/LoadingSpinner';
const RootLayout = () => {
  const navigation = useNavigation();
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
