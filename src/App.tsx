import React, { FC } from "react";
import {
  Button,
  SafeAreaView, View
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Bai1 } from "./screens/Bai1.tsx";
import { myStyles } from "./myStyles.tsx";

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name={"Home"} component={HomeScreen} />
          <Stack.Screen name={"Bai1"} component={Bai1} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const HomeScreen: FC<NativeStackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={myStyles.container}>
      <Button title={"Bài 1"} onPress={() => navigation.navigate("Bai1")} />
    </View>
  );
};

export default App;
