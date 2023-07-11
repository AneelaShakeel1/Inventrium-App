import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import BuyASubscriptionScreen from '../Screens/BuyASubscriptionScreen';
import HomeScreen from '../Screens/HomeScreen';
import AllCustomersScreen from '../Screens/AllCustomersScreen';
import AllProductsScreen from '../Screens/AllProductsScreen';
import AllOrdersScreen from '../Screens/AllOrdersScreen';
import AllPaymentsScreen from '../Screens/AllPaymentsScreen';
import AddingScreen from '../Screens/AddingScreen';
import AddCustomerScreen from '../Screens/AddCustomerScreen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Navigator = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const checkToken = async () => {
		try {
			const token = await AsyncStorage.getItem('token');
			if (token) {
				setIsAuthenticated(true);
			} else {
				setIsAuthenticated(false);
			}
		} catch (error) {
			console.error('Error retrieving token:', error);
		}
	};

	useEffect(() => {
		checkToken();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{isAuthenticated ? (
					<>
						<Stack.Screen
							options={{ headerShown: false }}
							name='buyasubscription'
							component={BuyASubscriptionScreen}
						/>
						<Stack.Screen
							options={{ headerShown: false }}
							name='home'
							component={HomeScreen}
						/>
						<Stack.Screen
							options={{ headerShown: false }}
							name='allcustomers'
							component={AllCustomersScreen}
						/>
						<Stack.Screen
							options={{ headerShown: false }}
							name='allproducts'
							component={AllProductsScreen}
						/>
						<Stack.Screen
							options={{ headerShown: false }}
							name='allorders'
							component={AllOrdersScreen}
						/>
						<Stack.Screen
							options={{ headerShown: false }}
							name='allpayments'
							component={AllPaymentsScreen}
						/>
						<Stack.Screen
							options={{ headerShown: false }}
							name='add'
							component={AddingScreen}
						/>
						<Stack.Screen
							options={{ headerShown: false }}
							name='addcustomer'
							component={AddCustomerScreen}
						/>
					</>
				) : (
					<>
						<Stack.Screen
							options={{ headerShown: false }}
							name='signup'
							component={SignUpScreen}
						/>
						<Stack.Screen
							options={{ headerShown: false }}
							name='login'
							component={LoginScreen}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
