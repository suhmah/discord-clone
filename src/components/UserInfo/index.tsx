import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadePhone,
  SettingsIcon,
} from "./styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Matheus</strong>
          <span>#3232</span>
        </UserData>
      </Profile>
      <Icons>
        <MicIcon />
        <HeadePhone />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
