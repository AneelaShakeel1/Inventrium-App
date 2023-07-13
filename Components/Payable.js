import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../Constants/colors";

const Payable = (props) => {
  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={styles.price}>{`Rs : ${props.price}`}</Text>
        <Text style={styles.sellerName}>{`Seller : ${props.sellerName}`}</Text>
        <Text
          style={styles.productName}
        >{`Product : ${props.productName}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 90,
    width: "90%",
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginLeft: 17,
    marginTop: 20,
  },
  price: {
    height: "30%",
    width: "100%",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 17,
    marginTop: 6,
  },
  sellerName: {
    height: "30%",
    width: "100%",
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 10,
  },
  productName: {
    height: "40%",
    width: "100%",
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 10,
  },
});

export default Payable;
