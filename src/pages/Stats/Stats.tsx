import { Box, Paper, Stack } from "@mui/material";
import { useGetTimer } from "hooks/useGetTimer";
import { useStyles } from "./Stats.style";
import StatsHeader from "./StatsHeader/StatsHeader";
import StatsSteps from "./StatsSteps/StatsSteps";
import StatsAchievments from "./StatsAchievments/StatsAchievments";
import StatsHealth from "./StatsHealth/StatsHealth";
import { getUserData } from "storage/userStorage";

const Stats = () => {
  const classes = useStyles();
  const userData = getUserData();
  const { actualTimer } = useGetTimer();

  return (
    <Box className={classes.box}>
      <Stack className={classes.stack} spacing={3}>
        <StatsHeader milliseconds={actualTimer} userData={userData} />
        <Paper>
          <StatsSteps milliseconds={actualTimer} />
          <StatsAchievments />
          <StatsHealth milliseconds={actualTimer} />
        </Paper>
      </Stack>
    </Box>
  );
};

export default Stats;
