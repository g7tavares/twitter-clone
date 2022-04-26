import React from 'react';

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
          <span>777 tweets</span>
        </ProfileInfo>
      </Header>
      {/* <ProfilePage /> */}
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
