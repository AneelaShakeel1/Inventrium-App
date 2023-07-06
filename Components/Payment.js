import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../Constants/colors";

const Payment = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.paymentMethod}>{props.paymentMethod}</Text>
        <Text style={styles.customer}>{props.customer}</Text>
        <Text style={styles.Payment}>{props.Payment}</Text>
      </View>
      <View>
        <Text style={styles.paymentPrice}>{props.paymentPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    height: 100,
    width: "90%",
    backgroundColor:colors.primary,
    borderRadius: 25,
    marginLeft: 15,
    marginTop: 10,
  },
  paymentMethod: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
  },
  paymentPrice: {
    marginLeft: 40,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  customer: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
  Payment: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
});
export default Payment;
