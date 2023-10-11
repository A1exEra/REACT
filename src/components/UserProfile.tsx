import styled from 'styled-components';

const UserProfile = () => {
  return (
    <Styled>
      <h2>My User Profile</h2>
    </Styled>
  );
};

export default UserProfile;

const Styled = styled.main`
  .profile {
    margin: 5rem auto;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
    width: 40rem;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    background-color: #f4f0fa;
  }
`;
