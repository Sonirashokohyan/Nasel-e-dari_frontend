import { CardProfilePage } from "@shared/styled/ProfilePageStyled";
import React from "react";



const StatisticsCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => {
  return (
    <CardProfilePage>
      <span>{icon}</span>
      <div>
        <p>{value}</p>
        <p>{label}</p>
      </div>
    </CardProfilePage>
  );
};

export default StatisticsCard;
