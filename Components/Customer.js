import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../Constants/colors';

const Customer = (props) => {
	return (
		<View
			style={styles.mainContainer}
			key={props?.key}
		>
			<Text style={styles.customerName}>{props.customerName}</Text>
			<Text style={styles.productDescription}>{props.productDescription}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		height: 70,
		width: '90%',
		backgroundColor: colors.primary,
		borderRadius: 25,
		marginLeft: 17,
		marginBottom: 10,
	},
	customerName: {
		height: '30%',
		width: '100%',
		fontWeight: 'bold',
		marginLeft: 10,
		marginTop: 10,
		fontSize: 17,
	},
	productDescription: {
		height: '70%',
		width: '100%',
		fontWeight: 'bold',
		fontSize: 13,
		marginTop: 5,
		marginLeft: 10,
	},
});

export default Customer;
