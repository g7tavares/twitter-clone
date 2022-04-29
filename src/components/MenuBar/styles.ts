import styled, { css } from 'styled-components';

import {
  Home,
  Notifications,
  Email,
  Person,
  CardList,
  Hashtag,
  MoreCircle,
  Twitter,
  Bookmark,
  // Plus,
  Feather,
  TextBulletListSquare
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const TwitterLogo = styled(Twitter)`
  width: 30px;
  height: 30px;
  color: var(--white);
  margin: 0 24px;
  margin-bottom: 15px;
`;

export const MenuButton = styled.button`
  display: flex;
  border-radius: 25px;
  align-items: center;
  flex-shrink: 0;
  padding: 8.25px 24px;
  outline: 0;
  transition: background 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: var(--button-hover);
  }

  & + button {
    margin-top: 13px;
  }

  & + button:last-child {
    margin-top: 30px;
    width: 40px;
    height: 40px;
    
    > span {
      display: none;
    }
    
    > strong {
      font-weight: bold;
    }
    
    @media (max-width: 1280px){
      display: flex;
      align-items: center;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }

      > strong {
        display: none;
      }
    }
  }

  > span {
    display: none;
  }
  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;
      font-size: 19px;
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const ExploreIcon = styled(Hashtag)`
  ${iconCSS}
`;

export const NotificationsIcon = styled(Notifications)`
  ${iconCSS}
`;

export const MessagesIcon = styled(Email)`
  ${iconCSS}
`;

export const SavedIcon = styled(Bookmark)`
  ${iconCSS}
`;

export const ListIcon = styled(TextBulletListSquare)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const MoreIcon = styled(MoreCircle)`
  ${iconCSS}
`;

export const NewTweetIcon = styled(Feather)`
  ${iconCSS}
`;
