import { Box } from "@chakra-ui/react";
import BarChart from "../components/BarCharts";
import PieChart from "../components/PieChart";


const Charts = () => {
  return (
    <>
      <Box mb="20px">
        <BarChart />
      </Box>

      <Box>
        <PieChart />
      </Box>
    </>
  );
};

export default Charts;