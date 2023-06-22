import * as React from 'react';
import { NavigationContainer } from "react-native-screens";
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import TelaDesc from "./src/telas/desc";
import TelaHome from "./src/telas/home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TelaHome}
        />
        <Stack.Screen name="Descrição" component={TelaDesc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
