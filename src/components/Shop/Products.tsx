import ProductItem from './ProductItem';
import styled from 'styled-components';
import books from '../../products';
const Products = () => {
  return (
    <Styled>
      <h2>Buy your favorite products</h2>
      <ul>
        {books.map((book) => (
          <ProductItem
            key={book.id}
            title={book.title}
            price={book.price}
            description={book.description}
            id={book.id}
          />
        ))}
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
