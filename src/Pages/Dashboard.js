import { Box } from "@chakra-ui/react";
import TransactionsTable from "../components/Transaction";


const Dashboard = () => {
  return (
    <>
      <Box>
        <TransactionsTable />
      </Box>
    </>
  );
};

export default Dashboard;