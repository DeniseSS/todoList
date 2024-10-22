import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../../src/screen/home"; // Ajuste o caminho conforme necessário
import { AboutScreen } from "../../screen/about"; // Ajuste o caminho conforme necessário
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons"; // Importando os ícones

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: styles.header,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: "#ce6b5d",
          tabBarInactiveTintColor: "#8e8e93",
          tabBarIcon: ({ color, size }) => {
            let iconName = "home-outline";

            if (route.name === "About") {
              iconName = "information-circle-outline";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ title: "Início" }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "Sobre" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
