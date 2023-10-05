import styled from 'styled-components';
import { INPUT } from '../../types';
import { RefObject } from 'react';
import React from 'react';
const Input = React.forwardRef(
  (props: { label: string; input: INPUT }, ref) => {
    return (
      <Styled>
        <label htmlFor={props.input.id}>
          <p>{props.label}</p>
        </label>
        <input {...props.input} ref={ref as RefObject<HTMLInputElement>} />
      </Styled>
    );
  }
);

const Styled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  label {
    margin-right: 1rem;
  }

  input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;
export default Input;
