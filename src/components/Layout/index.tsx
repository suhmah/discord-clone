import React from "react";

import { Grid } from "./styles";

import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChanelINfo from "../ChanelINfo";
import ChanelList from "../ChanelList";
import UserInfro from "../UserInfo";
import ChanllData from "../ChanellData";
import UserList from "../UserList";

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChanelINfo />
      <ChanelList />
      <UserInfro />
      <ChanllData />
      <UserList />
    </Grid>
  );
};

export default Layout;
