import { useState } from "react";
import { Button, Input, Box, Heading } from "@chakra-ui/react";

const PieChart = () => {
  const [month, setMonth] = useState("");
  const [priceRanges, setPriceRanges] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/pie-chart?month=${month}`
      );
      const data = await response.json();
      setPriceRanges(data.priceRanges);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <Box border="1px solid teal" mb="50px" p="50px">
      <Heading textAlign="center">Pie Chart</Heading>
      <form onSubmit={handleSubmit}>
        <Box display="flex" alignItems="center" w="70%" m="auto">
          <Input
            type="text"
            value={month}
            onChange={handleMonthChange}
            placeholder="Type month number"
          />

          <Button type="submit">Generate Bar Chart</Button>
        </Box>
      </form>

      {priceRanges.length > 0 && (
        <Box textAlign="center">
          <h2>Price Ranges</h2>
          <ul>
            {priceRanges.map((range) => (
              <li key={range.range}>
                {range.range}: {range.count}
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default PieChart;