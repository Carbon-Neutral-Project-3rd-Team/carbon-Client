import { useEffect } from "react";
import { View, Text } from "react-native";
import { startPedometer, usePedometerStore } from "../Home/PedometerLogic";

export default function StepScreen() {
  const steps = usePedometerStore((s) => s.steps);

  useEffect(() => {
    startPedometer();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 32 }}>steps: {steps}</Text>
    </View>
  );
}