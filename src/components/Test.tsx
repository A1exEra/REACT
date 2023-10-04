import { styled } from 'styled-components';
function Test() {
  return (
    <TestStyle>
      <h3>Code_Daemon</h3>
    </TestStyle>
  );
}

const TestStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.text2xl};
    color: ${({ theme }) => theme.colors.third600};
  }
`;
export default Test;
