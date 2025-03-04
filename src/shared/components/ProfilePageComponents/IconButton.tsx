import React from "react";
import { IconWrapperProfilePage } from "@shared/styled/ProfilePageStyled";

interface IconButtonProps {
  icon: React.ReactNode;
  position: "left" | "right";
}

const IconButton: React.FC<IconButtonProps> = ({ icon, position }) => {
  return <IconWrapperProfilePage position={position}>{icon}</IconWrapperProfilePage>;
};

export default IconButton;
