import styled from 'styled-components';

export const Header = styled.header`
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;

    strong {
      font-size: 16px;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  max-width: 700px;
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 20px;
        color: #737380;
      }
    }
  }

  ul {
    margin-top: 40px;
    display: flex;
    list-style: none;

    li {
      & + li {
        margin-left: 40px;
      }

      strong {
        display: block;
        font-size: 32px;
        color: #3d3d4d;
      }

      span {
        font-size: 18px;
        color: #737380;
      }
    }
  }
`;

export const Issues = styled.div`
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
