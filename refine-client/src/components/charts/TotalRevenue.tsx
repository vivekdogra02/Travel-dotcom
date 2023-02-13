import { Box, Stack, Typography } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";

import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";
import { ArrowCircleUpRounded } from "@mui/icons-material";

const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={700} color="#11142d">
        Total Revenue
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          $236,535
        </Typography>

        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded
            sx={{
              fontSize: 25,
              color: "#475be8",
            }}
          />
          <Stack>
            <Typography fontSize={15} color="#475be8">
              0.8%
            </Typography>
            <Typography fontSize={12} color="#808191">
              Than last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
        options={TotalRevenueOptions}
        series={TotalRevenueSeries}
        type="bar"
        height={310}
      />
    </Box>
  );
};

export default TotalRevenue;
