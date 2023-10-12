import { ReactNode } from 'react';
import MainHeader from './MainHeader';
const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
