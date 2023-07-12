import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../Constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Menu = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.mainContainer}>
        <View style={styles.icon}>
          <Ionicons name={props.Name} size={40} color="black" />
        </View>
        <View style={styles.menuTitleBackground}>
          <Text style={styles.iconTitle}>{props.Title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 70,
    width: "90%",
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginLeft: 17,
    marginTop: 30,
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  menuTitleBackground: {
    height: "100%",
    width: "70%",
    
  },
  iconTitle: {
    height: "100%",
    width: "100%",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 15,
    marginLeft: 25,
  },
});

export default Menu;
