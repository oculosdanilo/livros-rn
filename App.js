import * as React from "react";
import TelaDesc from "./src/telas/desc/index";
import TelaHome from "./src/telas/home/index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ title: "Início" }}
          component={TelaHome}
        />
        <Stack.Screen
          name="Desc"
          options={{ title: "Descrição" }}
          component={TelaDesc}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
