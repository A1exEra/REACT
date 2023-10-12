/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const UserProfile = () => {
  const { userData } = useSelector((state: any) => state.auth);
  return (
    <Styled>
      <h2>User Profile</h2>
      <p>Email: {userData.email}</p>
      <p>Password: {userData.password}</p>
    </Styled>
  );
};

export default UserProfile;

const Styled = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 40rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
`;
