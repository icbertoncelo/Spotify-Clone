import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href=" ">Home</a>
        </li>
        <li>
          <a href=" ">Browse</a>
        </li>
        <li>
          <a href=" ">Radio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>YOUR LIBRARY</span>
        </li>
        <li>
          <a href=" ">Made for you</a>
        </li>
        <li>
          <a href=" ">Recently played</a>
        </li>
        <li>
          <a href=" ">Songs</a>
        </li>
        <li>
          <a href=" ">Albums</a>
        </li>
        <li>
          <a href=" ">Artirts</a>
        </li>
        <li>
          <a href=" ">Stations</a>
        </li>
        <li>
          <a href=" ">Local Files</a>
        </li>
        <li>
          <a href=" ">Videos</a>
        </li>
        <li>
          <a href=" ">Podcasts</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href=" ">Classic Rock</a>
        </li>
        <li>
          <a href=" ">Flashback</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img
        src={AddPlaylistIcon}
        alt="Add a new playlist"
      />
      New playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
