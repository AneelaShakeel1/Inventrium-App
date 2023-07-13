import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../Constants/colors";

const AddingMenu = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 80,
    width: "90%",
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginLeft: 17,
    marginTop: 30,
    
    
  },
  title: {
    height: "100%",
    width: "100%",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 15,
    marginLeft: 25,
    
  },
});

export default AddingMenu;
