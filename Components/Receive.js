import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../Constants/colors";

const Receivable = (props) => {
  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={styles.price}>{`Rs : ${props.price}`}</Text>
        <Text
          style={styles.customerName}
        >{`Customer : ${props.customerName}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 70,
    width: "90%",
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginLeft: 17,
    marginTop: 20,
  },
  price: {
    height: "40%",
    width: "100%",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 17,

    marginTop: 10,
  },
  customerName: {
    height: "60%",
    width: "100%",
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 10,
  },
});

export default Receivable;
