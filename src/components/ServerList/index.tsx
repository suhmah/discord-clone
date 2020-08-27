import React from "react";

import { Container, Separator } from "./styles";

import SeverButton from "../SeverButton/index";

const Server: React.FC = () => {
  return (
    <Container>
      <SeverButton isHome />
      <Separator />
      <SeverButton />
      <SeverButton hasNotifications />
      <SeverButton mentions={3} />
      <SeverButton />
      <SeverButton />
      <SeverButton />
      <SeverButton mentions={3} />
      <SeverButton hasNotifications />
    </Container>
  );
};

export default Server;
