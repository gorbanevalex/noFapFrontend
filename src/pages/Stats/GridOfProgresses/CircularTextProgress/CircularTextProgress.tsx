import { ReactNode } from "react";
import { Box, CircularProgress } from "@mui/material";

type Props = {
  size: number;
  thickness: number;
  milliseconds: number;
  maximumMilliseconds: number;
  children: ReactNode;
};

const CircularTextProgress = ({
  size,
  thickness,
  milliseconds,
  maximumMilliseconds,
  children,
}: Props) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        size={size}
        thickness={thickness}
        variant="determinate"
        value={(milliseconds / maximumMilliseconds) * 100}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Box>
    </Box>
  );
};

export default CircularTextProgress;
