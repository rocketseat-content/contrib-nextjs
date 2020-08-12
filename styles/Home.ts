import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > ul {
    list-style-type: none;

    > li {
      padding: 12px 20px;
      background: #312e38;
      border-radius: 4px;
      box-shadow: 0 12px 10px -8px rgba(0,0,0,0.5);
      transition: 250ms ease-in-out;

      + li {
        margin-top: 16px;
      }

      :hover {
        background: #3b3843;
        color: #fff;
        transform: scale(1.01);
        box-shadow: 0 16px 16px -8px rgba(0,0,0,0.3);
      }

      :active {
        background: #27242d;
        transform: scale(0.99);
        box-shadow: 0 4px 4px -2px rgba(0,0,0,0.8);
        color: #d9d9d9;
      }

      a {
        display: flex;
        align-items: center;
      }

      img {
        filter: invert(1) hue-rotate(108deg) opacity(0.9);
        margin-right: 16px;
      }
    }

  }
`;

export const TitleContainer = styled.header`
  margin-bottom: 40px;

  > h1 {
    font-weight: 500;
    color: #fff;
  }
`;