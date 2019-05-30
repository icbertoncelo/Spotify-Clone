import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 110px;
  overflow: auto;
`;

export const Title = styled.div`
  font-size: 48px;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 250px;
  margin-right: 20px;
  margin-bottom: 20px;

  img {
    height: 250px;

    &:hover {
      opacity: 0.4;
    }
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }
`;
