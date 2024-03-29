import { useEffect, useState } from "react";
import { Box, Spinner, Select, Text } from "@chakra-ui/react";

const Statistics = () => {
  const [loading, setLoading] = useState(true);
  const [totalSaleAmount, setTotalSaleAmount] = useState(0);
  const [totalSoldItems, setTotalSoldItems] = useState(0);
  const [totalNotSoldItems, setTotalNotSoldItems] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState("1");

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        console.log("selectedMonth", selectedMonth);
        const response = await fetch(
          `http://localhost:5000/api//statistics?month=${selectedMonth}`
        );

        const data = await response.json();

        // Update the state with the fetched data
        setTotalSaleAmount(data.totalSaleAmount);
        setTotalSoldItems(data.totalSoldItems);
        setTotalNotSoldItems(data.totalNotSoldItems);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      }
    };

    fetchStatistics();
  }, [selectedMonth]);

  const handleMonthChange = (event) => {
    setSelectedMonth(+event.target.value);
  };

  return (
    <Box>
      <Box display="flex" w="70%" m="auto" p="20px">
        <label>Select Month:</label>
        <Select value={selectedMonth} onChange={handleMonthChange}>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </Select>
      </Box>
      <Box border="1px solid yellow" w="70%" m="auto" textAlign="center">
        {loading ? (
          <Spinner size="xl" />
        ) : (
          <>
            <Box
              display="flex"
              gap="20px"
              textAlign="center"
              alignItems="center"
            >
              <Text fontWeight="bold" fontSize="20px">
                Total Sale Amount :{" "}
              </Text>
              <Text fontWeight="600"> {totalSaleAmount}</Text>
            </Box>
            <Box display="flex" gap="20px" textAlign="center">
              <Text fontWeight="bold" fontSize="20px">
                Total Sold Items :
              </Text>
              <Text fontWeight="600">{totalSoldItems}</Text>
            </Box>
            <Box display="flex" gap="20px" textAlign="center">
              <Text fontWeight="bold" fontSize="20px">
                Total Not Sold Items :
              </Text>
              <Text fontWeight="600">{totalNotSoldItems}</Text>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Statistics;