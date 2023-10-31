import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error = ({ status, message }: { status: number; message: string }) => {
  return (
    <Styled>
      <div className="notFound">
        <div className="notFound-404">
          <h1>{status || 404}</h1>
          <h2>{message}</h2>
          <Link to="/">Back Home</Link>
        </div>
      </div>
    </Styled>
  );
};

export default Error;

const Styled = styled.div`
  position: relative;
  height: 100vh;
  background: #030005;
  a {
    font-family: 'Montserrat', sans-serif;
    display: inline-block;
    margin: 36px;
    text-transform: uppercase;
    color: #ff005a;
    text-decoration: none;
    border: 2px solid;
    background: transparent;
    padding: 10px 40px;
    font-size: 14px;
    font-weight: 700;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
  }
  .notFound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    max-width: 767px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
  }
  .notFound-404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 180px;
    margin-bottom: 20px;
    h1 {
      font-family: 'Oswald', sans-serif;
      font-size: 224px;
      font-weight: 900;
      margin-top: 0px;
      margin-bottom: 0px;
      margin-left: -12px;
      color: #030005;
      text-transform: uppercase;
      text-shadow: -1px -1px 0px #8400ff, 1px 1px 0px #ff005a;
      letter-spacing: -20px;
    }
    h2 {
      font-family: 'Ubuntu', sans-serif;
      font-size: 42px;
      font-weight: 700;
      color: #fff;
      text-transform: uppercase;
      text-shadow: 0px 2px 0px #8400ff;
      letter-spacing: 13px;
      margin: 0;
    }
  }
`;
