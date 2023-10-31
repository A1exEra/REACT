import styled from 'styled-components';
import { useFetcher } from 'react-router-dom';
import { useEffect, useRef } from 'react';
const NewsLetterSignup = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  //useFetcher is used when we want to trigger a route without triggering the component to which this route blongs
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  }, [state, data]);
  return (
    <Styled>
      <fetcher.Form method="post" action="/newsletter">
        <input
          type="email"
          name="email"
          placeholder="Sign up for newsletter..."
          aria-label="Sign up for newsletter"
          ref={inputRef}
        />
        <button type="submit">Sign up</button>
      </fetcher.Form>
    </Styled>
  );
};

export default NewsLetterSignup;

const Styled = styled.div`
  form {
    input,
    button {
      font: inherit;
      padding: 0.25rem 0.75rem;
      border-radius: 0;
      border: none;
    }
    button {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary300};
        color: ${({ theme }) => theme.colors.gray800};
      }
    }
  }
`;
