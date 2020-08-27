import React from "react";

import { Container, Avatar, Message, Header, Content } from "./styles";

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot: boolean;
}

const ChanelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
}) => {
  return (
    <Container>
      <Avatar />
      <Message>
        <Header>
          <strong>{author}</strong>
          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>Hoje sei la o que</Content>
      </Message>
    </Container>
  );
};

export default ChanelMessage;
