import { FaStar, FaBook, FaBookOpen } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import StatisticsCard from "./StatisticCard";
import { ContainerProfilePage , GridProfilePage } from "@shared/styled/ProfilePageStyled";


const Statistics = () => {
  const stats = [
    { icon: <FaStar />, value: "0", label: "Day Streak" },
    { icon: <AiFillLike />, value: "0%", label: "Percentage" },
    { icon: <FaBookOpen />, value: "0", label: "Unit" },
    { icon: <FaBook />, value: "0", label: "Lesson" },
  ];

  return (
    <ContainerProfilePage>
      <h4 style={{ paddingLeft: "3%", paddingTop: "1rem" }}>Statistics</h4>
      <GridProfilePage>
        {stats.map((stat, index) => (
          <StatisticsCard key={index} icon={stat.icon} value={stat.value} label={stat.label} />
        ))}
      </GridProfilePage>
    </ContainerProfilePage>
  );
};

export default Statistics;
