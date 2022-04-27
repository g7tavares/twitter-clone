import styled, {css} from 'styled-components';
import {LocationOn, Balloon, CalendarLtr} from '../../styles/Icons'
import Button from '../Button/index'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar{
    display: none;
  }
`;
 
export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background-color: var(--twitter);
  position: relative;
  &:hover{
    /* filter: brightness(85%); */
    /* cursor: pointer; */
  }
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  border: 3.75px solid var(--primary);
  background-color: var(--gray);
  border-radius: 50%;
  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
  &:hover{
    /* filter: brightness(85%); */
    /* cursor: pointer; */
  }
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  display: flex;
  flex-direction: column;
  position: relative;

  >h1{
    font-weight: bold;
    font-size: 19px;
  }

  >h2{
    font-weight: normal;
    font-size: 15px;
    color: var(--gray)
  }

  >p{
    font-size: 15px;
    margin-top: 11px;
  }

  >ul{
    list-style: none;
    margin: 10px 0;
    >li{
      display: flex;
      align-items: center;
      color: var(--gray);
      font-size:15px;
      >svg{
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }

`;


const IconCSS = css`
  width: 20px;
  height: 20px;
`
export const LocationIcon = styled(LocationOn)`
  ${IconCSS}
`;

export const BalloonIcon = styled(Balloon)`
  ${IconCSS}
`;

export const CalendarIcon = styled(CalendarLtr)`
  ${IconCSS}
`;

export const Followage = styled.div`
  display: flex;
  >span{
    font-size: 15px;
    color: var(--gray);
    cursor: default;

    &:hover{
      text-decoration: underline white;
      cursor: pointer;

    }
    &:nth-child(1){
      margin-right: 20px;
    }
  }

`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media(min-width: 340px){
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;
