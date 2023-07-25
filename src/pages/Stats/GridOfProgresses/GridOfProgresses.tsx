import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useStyles } from "./GridOfProgresses.style";
import CircularTextProgress from "./CircularTextProgress/CircularTextProgress";
import { Typography } from "@mui/material";

type Props = {
    circularSize: number;
  milliseconds: number;
};

const GridOfProgresses = ({ circularSize, milliseconds }: Props) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.grid}
      container
      spacing={2}
      justifyContent="space-between"
      disableEqualOverflow
    >
      {/* Map */}
      <Grid className={classes.gridItem}>
        <CircularTextProgress
          size={circularSize}
          thickness={1}
          milliseconds={milliseconds}
          maximumMilliseconds={421889170}
        >
          123
        </CircularTextProgress>
        <Typography component="p" mt={1}>
          Заголовок какой-то
        </Typography>
        <Typography component="p" variant="subtitle2">
          Описание
        </Typography>
      </Grid>
    </Grid>
  );
};

export default GridOfProgresses;
