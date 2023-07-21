import {
  Box,
  Button,
  Card,
  Container,
  ListItem,
  Paper,
  Stack,
  Step,
  StepIconProps,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { AcUnit, AccessTime, VideoLabel } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useGetTimer } from "hooks/useGetTimer";
import { ColorlibConnector, useStyles } from "./Stats.style";
import { getUserData } from "storage/userStorage";
import { theme } from "themes/theme";
import CircularTextProgress from "./CircularTextProgress/CircularTextProgress";

const Stats = () => {
  const classes = useStyles();
  const { actualTimer } = useGetTimer();
  const userData = getUserData();

  const [progressPercentage, setProgressPercentage] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);

  const convertMillisecondsToTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    const remainingDays = days - years * 365;
    const remainingHours = hours - days * 24;
    const remainingMinutes = minutes - hours * 60;
    const remainingSeconds = seconds - minutes * 60;

    return {
      years,
      days: remainingDays,
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remainingSeconds,
    };
  };

  const formatProgress = (milliseconds) => {
    const convertedTime = convertMillisecondsToTime(milliseconds);
    // Форматируем дату в строку для отображения
    setFormattedDate(
      `${convertedTime.years} г. ${convertedTime.days} д. ${convertedTime.hours} ч. ${convertedTime.minutes} мин. ${convertedTime.seconds} сек.`
    );
    // Вычисляем процент прогресса (31536000000мс - год)
    setProgressPercentage((milliseconds / 31536000000) * 100);
  };

  useEffect(() => {
    formatProgress(actualTimer);
  }, [actualTimer]);



const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 40,
  height: 40,
  display: "flex",
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#faa233",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#faa233",
  }),
}));

  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
      1: <VideoLabel />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  return (
    <Box className={classes.box}>
      <Stack className={classes.stack} spacing={3}>
        <Container>
          <Card
            sx={{
              backgroundColor: `${theme.palette.primary.main}`,
              overflow: "visible",
            }}
            className={classes.customCard}
          >
            <Typography
              className={classes.cardTitle}
              variant="h5"
              component="p"
            >
              👋 Привет, {userData?.name}
            </Typography>
            <div className={classes.cardTime}>
              <AccessTime className={classes.clockIcon} />
              <div>
                <Typography component="p">Ты на воздержании уже</Typography>
                <Typography variant="h6" component="p">
                  {formattedDate}
                </Typography>
              </div>
            </div>
            <Button
              sx={{
                marginTop: "20px",
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
              }}
              size="medium"
              variant="contained"
            >
              Поделиться
            </Button>
            <img
              src="http://localhost:3000/Gigachad.png"
              alt="gigachad"
              loading="lazy"
              className={classes.cardImage}
            />
          </Card>
        </Container>
        <Paper>
          <Box>
            <Typography component="h2" variant="h2" mb={1}>
              Достижения
            </Typography>
            <Stack
              className={`${classes.stack} ${classes.achievmentList}`}
              direction="row"
              spacing={2}
              overflow="auto"
            >
              {/* Вот это в map */}
              <ListItem className={classes.achievmentCard}>
                <Card>
                  <AccessTime />
                  <Typography component="p">Заголовок</Typography>
                  <Typography component="p" variant="subtitle2">
                    Описание
                  </Typography>
                </Card>
              </ListItem>
            </Stack>
          </Box>
          <Box mt={3}>
            <Typography component="h2" variant="h2" mb={1}>
              Этапы
            </Typography>
            <Stepper
              alternativeLabel
              activeStep={2} // Вот тут какой этап сейчас
              connector={<ColorlibConnector />}
            >
              {/* map */}
              <Step>
                <StepLabel StepIconComponent={ColorlibStepIcon}>123</StepLabel>
              </Step>
            </Stepper>
          </Box>
          <Box mt={3}>
            <Typography component="h2" variant="h2" mb={1}>
              Ваше здоровье
            </Typography>
            <CircularTextProgress
              size={70}
              thickness={3}
              progressPercent={604800000}
              text={<AcUnit />}
            />
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Stats;
