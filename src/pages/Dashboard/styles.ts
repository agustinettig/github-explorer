import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  max-width: 450px;
  margin-top: 80px;
  font-size: 48px;
  font-weight: bold;
  color: #3a3a3a;
`;

export const Form = styled.form<FormProps>`
  max-width: 700px;
  margin-top: 40px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    color: #fff;
    border: none;
    border-radius: 0 5px 5px 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.15, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    display: block;
    max-width: 100%;
    height: 110px;
    border-radius: 5px;
    padding: 24px;
    background-color: #ffffff;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
