import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles";

import ChanelButton from "../ChanellButton";

const ChanelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      <ChanelButton ChannelName="chat-livre" />
      <ChanelButton ChannelName="Trabalho" />
      <ChanelButton ChannelName="lolzinho" />
      <ChanelButton ChannelName="csgo" />
      <ChanelButton ChannelName="Valorant" />
    </Container>
  );
};

export default ChanelList;
