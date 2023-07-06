import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../Constants/colors";
const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.mainContainer}>
      <Text style={styles.btnTitle}>{props.btnTitle}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    width: 100,
    borderRadius: 23,
    backgroundColor: colors.btnColor,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  btnTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
export default Button;
