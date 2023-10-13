/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { NOTIFICATION } from '../../types';
const Notification = ({ notification }: { notification: NOTIFICATION }) => {
  const { status, title, message } = notification;
  return (
    <Styled $status={status}>
      <h2>{title}</h2>
      <p>{message}</p>
    </Styled>
  );
};

export default Notification;
interface STYLED_PROPS {
  $status: string;
}
const Styled = styled.section<STYLED_PROPS>`
  width: 100%;
  height: 3rem;
  background-color: ${(props) => {
    switch (props.$status) {
      case 'error':
        return '#690000';
      case 'success':
        return '#1ad1b9';
      default:
        return '#1a8ed1';
    }
  }};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 10%;
  align-items: center;
  color: white;
  h2,
  p {
    font-size: 1rem;
    margin: 0;
  }
  .error {
    background-color: #690000;
  }
  .success {
    background-color: #1ad1b9;
  }
`;
