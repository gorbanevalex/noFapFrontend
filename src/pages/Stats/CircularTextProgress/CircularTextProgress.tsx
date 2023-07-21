import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const CircularTextProgress = ({size, thickness, progressPercent, text }) => {

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        size={size}
        thickness={thickness}
        variant="determinate"
        value={progressPercent}
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
          {text}
      </Box>
    </Box>
  );
};

export default CircularTextProgress;
