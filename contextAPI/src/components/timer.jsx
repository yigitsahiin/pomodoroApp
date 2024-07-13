import { Button, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useGlobalStateContext } from "../store/globalState/context";
export const Timer = () => {
  const { state , dispatch} = useGlobalStateContext();
  const [remainingTime, setRemainingTime] = useState(state.time.pomodoro);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    setRemainingTime(state.time.pomodoro);
  }, [state.time.pomodoro]);
  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setTimeout(() => {
        let [minutes, seconds] = remainingTime.split(":").map(Number);
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        }
        setRemainingTime(
          `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`
        );
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [remainingTime, isPaused]);
  const handlePauseResume = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };
  return (
    <Stack
      sx={{
        width: "410px",
        height: "410px",
        borderRadius: "50%",
        boxShadow: "50px 50px 100px 0px #ff7f00",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          width: "366px",
          height: "366px",
          borderRadius: "50%",
          backgroundColor: "#161932",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" component="h2">
          {" "}
          {remainingTime}{" "}
        </Typography>{" "}
        <Button
          variant="text"
          sx={{ color: "white", fontSize: "18px" }}
          onClick={handlePauseResume}
        >
          {" "}
          {isPaused ? "RESUME" : "PAUSE"}{" "}
        </Button>{" "}
      </Stack>{" "}
    </Stack>
  );
};
