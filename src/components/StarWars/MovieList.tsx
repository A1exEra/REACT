import styled from 'styled-components';

interface MOVIE {
  episode_id: string;
  created: string;
  title: string;
  opening_crawl: string;
}
function MovieList(props: { movies: MOVIE[] }) {
  const moviesList = props.movies.map((movie: MOVIE) => (
    <li key={movie.episode_id + movie.created}>
      <h3>{movie.title}</h3>
      <p className="description">{movie.opening_crawl}</p>
    </li>
  ));
  return <Styled>{moviesList}</Styled>;
}

const Styled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;
  }
`;
export default MovieList;
