import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "../Constants/colors";

const MyInput = (props) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInputTitle}
        placeholder={props.placeHolder}
        secureTextEntry={props.secure ? true : false}
        value={props.value}
        onChangeText={props.onChangeText} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.bgWhite,
    borderRadius: 25,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  textInputTitle: {
    width: "100%",
    marginLeft: 10,
  },
});

export default MyInput;
