import { Box, Typography } from "@mui/material";
import GridOfProgresses from "../GridOfProgresses/GridOfProgresses";

type Props = {
  milliseconds: number;
}

const StatsSteps = ({milliseconds}:Props) => {
  return (
    <Box>
      <Typography component="h2" variant="h2" mb={2}>
        Этапы
      </Typography>
      <GridOfProgresses circularSize={60} milliseconds={milliseconds} />
    </Box>
  );
}

export default StatsSteps