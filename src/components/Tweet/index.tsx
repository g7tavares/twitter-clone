import React from 'react'
import { Container, Retweeted, RetweetedIcon, Body, Avatar, Content, Header, Dot, Text, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon, ShareIcon } from './styles'

export default function index() {
  return (
    <Container>
      <Retweeted>
        <RetweetedIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>ɢᴜɪʟʜᴇʀᴍᴇ,</strong>
            <span>@gtavaresx7</span>
            <Dot />
            <time>27 de abr</time>
          </Header>
        </Content>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo delectus aperiam iste! Tempora asperiores expedita provident dolorem eum! Quos facilis perferendis placeat quam praesentium sequi odio ducimus dicta autem natus!
        </Text>
        <ImageContent />
        <Icons>
          <Status>
            <CommentIcon />
            16
          </Status>
          <Status>
            <RetweetIcon />
            7
          </Status>
          <Status>
            <LikeIcon />
            27
          </Status>
          <Status>
            <ShareIcon />
          </Status>
        </Icons>
      </Body>
    </Container>
  )
}
