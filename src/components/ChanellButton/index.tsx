import React from "react";

import { Container, HashtagIcon, InvateIcon, SettingsIcons } from "./styles";

export interface Props {
  ChannelName: string;
  selected?: boolean;
}

const ChanellButton: React.FC<Props> = ({ ChannelName, selected }) => {
  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <HashtagIcon />
        <span>{ChannelName}</span>
      </div>
      <div>
        <InvateIcon />
        <SettingsIcons />
      </div>
    </Container>
  );
};

export default ChanellButton;
