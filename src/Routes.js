import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";


import TransactionsTable from "./components/Transaction";
import Charts from "./Pages/Chart";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route
          path="/transactionStatistics"
          element={<TransactionsTable />}
        ></Route>
        <Route
          path="/transactionsChart"
          element={<Charts />}
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;