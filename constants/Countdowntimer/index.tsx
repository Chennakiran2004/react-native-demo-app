import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { MaintenanceTimerContainer, TimerIconWrapper } from "./index.styles";

// Dummy icon if OutlineMediumTimerIcon is missing
const OutlineMediumTimerIcon = () => <Text>⏱️</Text>;

function convertTimeInSecsToHHMMSSFormat(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}h : ${mins
    .toString()
    .padStart(2, "0")}m : ${secs.toString().padStart(2, "0")}s`;
}

interface Props {
  initialTime: number;
  onChangeTime: () => void;
}

const CountdownTimer = ({ initialTime, onChangeTime }: Props) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    if (timeRemaining <= 0) {
      onChangeTime();
      return;
    }

    const timerId = setTimeout(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeRemaining]);

  return (
    <View>
      <MaintenanceTimerContainer>
        <TimerIconWrapper>
          <OutlineMediumTimerIcon />
        </TimerIconWrapper>
        <Text>{convertTimeInSecsToHHMMSSFormat(timeRemaining)}</Text>
      </MaintenanceTimerContainer>
    </View>
  );
};

export default CountdownTimer;
