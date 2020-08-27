import React from "react";

import {
  Container,
  Messages,
  InputWrapper,
  Input,
  InputIcon,
  Mention,
} from "./styles";

import ChannelMessage from "../ChanelMessage";

function ChanellData() {
  return (
    <Container>
      <Messages>
        <ChannelMessage author="Matheus" date="28/02/2919" content="Oi" />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content={
            <>
              <Mention>@Matheus</Mention>, me manda algo
            </>
          }
          hasMention
          isBot
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
        <ChannelMessage
          author="Sei lá quem"
          date="28/02/2919"
          content="me manda algo"
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChanellData;
