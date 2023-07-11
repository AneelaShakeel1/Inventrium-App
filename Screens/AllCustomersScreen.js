import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import Customer from '../Components/Customer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getDataFromAsyncStorage = async (key) => {
	try {
		const data = await AsyncStorage.getItem(key);
		if (data !== null) {
			return JSON.parse(data);
		} else {
			console.log('data not found');
			return null;
		}
	} catch (error) {
		console.error('Error retrieving data:', error);
		return null;
	}
};

const AllCustomersScreen = () => {
	const [data, setData] = useState([]);
	const fetchCustomer = async () => {
		try {
			const userData = await getDataFromAsyncStorage('userData');
			const token = await getDataFromAsyncStorage('token');
			const response = await fetch(
				`https://scary-yak-costume.cyclic.app/api/v1/fetch/customer/by/userid?user_id=${userData.id}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'x-access-token': `${token}`,
					},
					body: urlencoded.toString(),
				}
			);

			if (response.ok) {
				const data = await response.json();
				setData(data);
			} else {
				Alert.alert('some thing went wrong');
			}
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		fetchCustomer();
	}, []);
	return (
		<SafeAreaView style={styles.mainContainer}>
			<ScrollView>
				<View style={styles.Heading}>
					<Text style={styles.headingTitle}>All Customers</Text>
				</View>
				<View style={styles.customersBackground}>
					{data.data.map((v, i) => {
						<Customer
							key={i}
							customerName={v?.customer_name}
							productDescription={v?.description}
						/>;
					})}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		height: '100%',
		width: '100%',
		marginTop: 25,
	},
	Heading: {
		height: '10%',
	},
	headingTitle: {
		fontWeight: 'bold',
		fontSize: 25,
		marginLeft: 100,
		marginTop: 5,
		marginBottom: 15,
	},
	customersBackground: {
		height: '90%',
	},
});

export default AllCustomersScreen;
