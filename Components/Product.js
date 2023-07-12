import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../Constants/colors";

const Product = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.productImageBackground}>
        <Image style={styles.image} source={props.image} />
      </View>
      <View style={styles.productTitles}>
        <Text style={styles.productHeading}>{props.productHeading}</Text>
        <Text style={styles.productDescription}>
          {props.productDescription}
        </Text>
        <Text style={styles.productPrice}>{`Rs : ${props.productPrice}`}</Text>
        <Text
          style={styles.productPayment}
        >{`Payment : ${props.productPayment}`}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 90,
    width: "90%",
    marginBottom: 20,
    borderRadius: 25,
    marginLeft: 15,
    flexDirection: "row",
  },
  productDescription: {
    marginLeft: 15,
  },
  productPrice: {
    marginLeft: 15,
    color: colors.primary,
    fontWeight: "bold",
  },
  productPayment: {
    marginLeft: 15,
    fontWeight: "bold",
  },
  productImageBackground: {
    height: "80%",
    width: "30%",
    borderRadius: 25,
    marginRight: 5,
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
});

export default Product;
