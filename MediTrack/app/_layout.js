import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../src/redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Index" }} />
        <Stack.Screen
          name="AddPrescriptionScreen"
          options={{ title: "AddPrescriptionScreen" }}
        />
        <Stack.Screen
          name="PreviewMedicinesModal"
          options={{ title: "PreviewMedicinesModal" }}
        />
        <Stack.Screen name="SplashScreen" options={{ title: "SplashScreen" }} />
      </Stack>
    </Provider>
  );
}
