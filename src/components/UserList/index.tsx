import React from "react";

import { Container, User, Avatar, Role } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível 1</Role>
      <UserRow nickname="Matheus Henriuqe" />

      <Role>Offline - 5</Role>
      <UserRow nickname="User discord know 1" isBot />
      <UserRow nickname="User discord know 2" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
      <UserRow nickname="User discord know 5" />
    </Container>
  );
};

export default UserList;
