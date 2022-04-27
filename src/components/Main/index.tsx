import React from 'react';
import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>ɢᴜɪʟʜᴇʀᴍᴇ,</strong>
          <span>999 tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />
      <BottomMenu>
        <button>
          <HomeIcon />
        </button>
        <button>
          <SearchIcon />
        </button>
        <button>
          <BellIcon />
        </button>
        <button>
          <EmailIcon />
        </button>
      </BottomMenu>
    </Container>
  );
};

export default Main;
