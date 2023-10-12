import ProductItem from './ProductItem';
import styled from 'styled-components';
const Products = () => {
  return (
    <Styled>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
      </ul>
    </Styled>
  );
};

export default Products;
const Styled = styled.section`
  h2 {
    color: white;
    margin: 2rem auto;
    text-align: center;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
