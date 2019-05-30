import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://img5.bestservice.de/pic_500x500/classic_rock.jpg"
        alt="Playlist"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Classic Rock</h1>
        <p>20 songs</p>

        <button type="button">PLAY</button>
      </div>
    </Header>

    <SongList
      cellPadding={0}
      cellSpacing={0}
    >
      <thead>
        <th />
        <th>TITLE</th>
        <th>ARTIST</th>
        <th>ALBUM</th>
        <th>
          <img
            src={ClockIcon}
            alt="Duration"
          />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src={PlusIcon}
              alt="Add"
            />
          </td>
          <td>Patience</td>
          <td>Guns 'N Rores</td>
          <td>G N' R Lies</td>
          <td>4:18</td>
        </tr>
        <tr>
          <td>
            <img
              src={PlusIcon}
              alt="Add"
            />
          </td>
          <td>Patience</td>
          <td>Guns 'N Rores</td>
          <td>G N' R Lies</td>
          <td>4:18</td>
        </tr>
        <tr>
          <td>
            <img
              src={PlusIcon}
              alt="Add"
            />
          </td>
          <td>Patience</td>
          <td>Guns 'N Rores</td>
          <td>G N' R Lies</td>
          <td>4:18</td>
        </tr>
        <tr>
          <td>
            <img
              src={PlusIcon}
              alt="Add"
            />
          </td>
          <td>Patience</td>
          <td>Guns 'N Rores</td>
          <td>G N' R Lies</td>
          <td>4:18</td>
        </tr>
        <tr>
          <td>
            <img
              src={PlusIcon}
              alt="Add"
            />
          </td>
          <td>Patience</td>
          <td>Guns 'N Rores</td>
          <td>G N' R Lies</td>
          <td>4:18</td>
        </tr>
        <tr>
          <td>
            <img
              src={PlusIcon}
              alt="Add"
            />
          </td>
          <td>Patience</td>
          <td>Guns 'N Rores</td>
          <td>G N' R Lies</td>
          <td>4:18</td>
        </tr>
        <tr>
          <td>
            <img
              src={PlusIcon}
              alt="Add"
            />
          </td>
          <td>Patience</td>
          <td>Guns 'N Rores</td>
          <td>G N' R Lies</td>
          <td>4:18</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
