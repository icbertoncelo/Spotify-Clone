import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars1.githubusercontent.com/u/15328398?v=4" alt="User" />
      Ian Carlos
    </User>
  </Container>
);

export default Header;
