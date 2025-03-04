import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem"; // Adjust path as necessary
import { UnorderedUlSettingPage } from "@shared/styled/SettingsPageStyled";

interface UnorderedListProps {
  items: { label: string; defaultChecked?: boolean }[];
  onChange: (checked: boolean) => void;
}


const UnorderedList: React.FC<UnorderedListProps> = ({ items, onChange }) => {
  return (
    <UnorderedUlSettingPage>
      {items.map((item, index) => (
        <ListItem key={index} label={item.label} defaultChecked={item.defaultChecked} onChange={onChange} />
      ))}
    </UnorderedUlSettingPage>
  );
};

export default UnorderedList;
