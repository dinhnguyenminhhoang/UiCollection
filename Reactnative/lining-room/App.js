import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreens from "./src/screens/HomeScreens";
const Stack = createStackNavigator();
export default function App() {
    const [fontLoaded] = useFonts({
        textHeading: require("./assets/font/bold.ttf"),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontLoaded]);
    if (!fontLoaded) return null;
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="lining room"
                    component={HomeScreens}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {},
});
