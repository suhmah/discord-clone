import React from "react";

import Photo from "../../assets/mat.jpg";

import { Button } from "./styles";

export interface Props {
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  selected?: boolean;
}

const SeverButton: React.FC<Props> = ({
  isHome,
  hasNotifications,
  mentions,
  selected,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src={Photo} alt="Matheus" />}
    </Button>
  );
};

export default SeverButton;
