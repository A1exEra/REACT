import styled from 'styled-components';
import Card from '../UI/Card';
import { useCallback, useEffect, useState } from 'react';
import MovieList from './MovieList';
import LoadingSpinner from '../UI/LoadingSpinner';
function StarWars() {
  const [movies, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const getMovies = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);
    const response = await fetch('https://swapi.dev/api/films/');
    try {
      if (!response.ok) {
        throw new Error('Could not load data!');
      }
      const data = await response.json();
      //   console.log(data);
      setMoviesList(data.results);
      setIsLoading(false);
      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      console.error(error);
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    getMovies();
  }, [getMovies]);
  const onClickHandler = () => {
    getMovies();
  };
  let content = <h3>No movies have been loaded yet!</h3>;
  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }
  if (errorMessage) {
    content = <h3>{errorMessage}</h3>;
  }
  if (isLoading) {
    content = <LoadingSpinner />;
  }
  return (
    <Styled>
      <Card>
        <button onClick={onClickHandler}>Get Movies</button>
        {content}
      </Card>
    </Styled>
  );
}

const Styled = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;
  button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #641e03;
      border-color: #641e03;
    }
  }
  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export default StarWars;
