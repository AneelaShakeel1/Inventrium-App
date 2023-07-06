import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import BuyASubscriptionScreen from "../Screens/BuyASubscriptionScreen";
import HomeScreen from "../Screens/HomeScreen";
import AllCustomersScreen from "../Screens/AllCustomersScreen";
import AllProductsScreen from "../Screens/AllProductsScreen";
import AllOrdersScreen from '../Screens/AllOrdersScreen';
import AllPaymentsScreen from "../Screens/AllPaymentsScreen";

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="signup"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={LoginScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="buyasubscription"
          component={BuyASubscriptionScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="allcustomers"
          component={AllCustomersScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="allproducts"
          component={AllProductsScreen}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="allorders"
          component={AllOrdersScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="allpayments"
          component={AllPaymentsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
