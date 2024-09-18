import { Stack } from "expo-router";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <StatusBar backgroundColor="#f2f2f2" />
      <ExpoStatusBar style="dark" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(AddHabit)" options={{ headerShown: false }} />
        <Stack.Screen name="(Weekly)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
