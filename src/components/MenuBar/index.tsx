import React from 'react';
import Button from '../Button'
import {
  Container,
  Topside,
  TwitterLogo,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  SavedIcon,
  ListIcon,
  ProfileIcon,
  MoreIcon,
  // NewTweetIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <TwitterLogo />

        <MenuButton>
          <HomeIcon />
          <span>Página inicial</span>
        </MenuButton>

        <MenuButton>
          <ExploreIcon />
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <NotificationsIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <MessagesIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <SavedIcon />
          <span>Itens salvos</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Listas</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <MenuButton>
          <MoreIcon />
          <span>Mais</span>
        </MenuButton>

        <Button>
          {/* <NewTweetIcon /> */}
          <strong>+</strong>
          <span>Tweetar</span>
        </Button>
      </Topside>
    </Container>
  );
};

export default MenuBar;
