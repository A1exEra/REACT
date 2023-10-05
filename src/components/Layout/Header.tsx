/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import logo from '../../assets/images/foodie_logo.svg';
import mainImg from '../../assets/images/main_img.jpg';
import CartButton from '../UI/CartButton';
function Header({ onShowCart }: { onShowCart: () => void }) {
  return (
    <StyledHeader>
      <header className="header">
        <h1>TastyCrave</h1>
        <img src={logo} alt="logo image" className="logo" />
        <CartButton onClick={onShowCart} />
      </header>
      <div className="main-image">
        <img src={mainImg} alt="header image" />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: #8a2b06;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 10;
    h1 {
      font-size: ${({ theme }) => theme.fontSizes.text46px};
    }
  }
  .logo {
    width: 100px;
    height: 100px;
  }
  .main-image {
    width: 100%;
    height: 25rem;
    z-index: 0;
    overflow: hidden;
    img {
      width: 110%;
      height: 100%;
      object-fit: cover;
      transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
    }
  }
`;
export default Header;
