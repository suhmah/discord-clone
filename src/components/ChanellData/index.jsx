import React from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

import ChannelMessage from "../ChanelMessage";

function ChanellData() {
  return (
    <Container>
      <Messages>
        <ChannelMessage author="Matheus" date="28/02/2919" content="Oi" />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChanellData;
