import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: 600;
  font-size: 15px;
  outline: 0;
  cursor: pointer;
  color: var(--gray);
  transition: background 0.2s ease-in-out;
  text-overflow: ellipsis;
  border-bottom: 1px solid var(--outline);

  @media (max-width: 420px) {
    font-size: 12px;
  }

  @media (max-width: 310px) {
    font-size: 10px;
  }

  &:hover {
    background-color: var(--button-hover);
  }

  &.t{
    width: 24%;
  }

  &.tr{
    width: 34%;
  }

  &.m{
    width: 18%;
  }

  &.c{
    width: 24%;
  }

  &.active {
    color: var(--white);
    border-bottom: 2px solid var(--twitter);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;

`;
