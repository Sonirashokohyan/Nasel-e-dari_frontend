import React from "react";
import { Switch } from "antd";

interface ListItemProps {
  label: string;
  defaultChecked?: boolean;
  onChange: (checked: boolean) => void;
}

const ListItem: React.FC<ListItemProps> = ({ label, defaultChecked, onChange }) => {
  return (
    <li>
      <span>{label}</span>
      <span>
        <Switch defaultChecked={defaultChecked} onChange={onChange} />
      </span>
    </li>
  );
};

export default ListItem;
