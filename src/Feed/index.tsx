import React from 'react';
import Tweet from '../components/Tweet';
import {Container, Tab, Tabs, Tweets} from './styles'

const Feed: React.FC = () => {
  return(
    <Container>
      <Tabs>
        <Tab className='t active'>Tweets</Tab>
        <Tab className='tr'>Tweets e respostas</Tab>
        <Tab className='m'>Mídia</Tab>
        <Tab className='c'>Curtidas</Tab>
      </Tabs>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
}

export default Feed;