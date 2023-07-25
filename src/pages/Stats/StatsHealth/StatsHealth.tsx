import { Box, Typography } from "@mui/material";
import GridOfProgresses from "../GridOfProgresses/GridOfProgresses";

type Props = {
  milliseconds: number;
};

const StatsHealth = ({ milliseconds }: Props) => {
  return (
    <Box mt={3}>
      <Typography component="h2" variant="h2" mb={2}>
        Ваше здоровье
      </Typography>
      <GridOfProgresses circularSize={80} milliseconds={milliseconds} />
    </Box>
  );
};

export default StatsHealth;
