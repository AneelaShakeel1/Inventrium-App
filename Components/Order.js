import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Button from "./Button";
import colors from "../Constants/colors";

const Order = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.productImageBackground}>
        <Image style={styles.image} source={props.image} />
      </View>
      <View style={styles.productTitles}>
        <Text style={styles.productHeading}>{props.productHeading}</Text>
        <Text style={styles.customer}>{props.customer}</Text>
        <Text style={styles.deliveryDate}>{props.deliveryDate}</Text>
        <Text style={styles.payment}>{`Payment : ${props.payment}`}</Text>
        <Text style={styles.productPrice}>{`Rs : ${props.productPrice}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 130,
    width: "90%",
    marginBottom: 20,
    borderRadius: 25,
    marginLeft: 15,
    flexDirection: "row",
  },

  productImageBackground: {
    height: "70%",
    width: "30%",
    borderRadius: 25,
    marginRight: 20,
    marginTop: 5,
  },
  productTitles: {
    height: "100%",
    width: "70%",
    borderRadius: 25,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 25,
  },
  productHeading: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  customer: {
    fontWeight: "bold",
    marginLeft: 15,
  },
  deliveryDate: {
    fontWeight: "bold",
    marginLeft: 15,
  },
  payment: {
    fontWeight: "bold",
    marginLeft: 15,
  },
  productPrice: {
    fontWeight: "bold",
    color: colors.primary,
    marginLeft: 15,
    fontSize: 15,
  },
});
export default Order;
