import { View, Text } from "react-native";
import React from "react";
import AddingMenu from "../Components/AddingMenu";

const AddingScreen = (props) => {
  return (
    <View style={{ marginTop: 35 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
          marginLeft: 105,
          marginBottom: 10,
        }}
      >
        Adding Screen
      </Text>
      <AddingMenu
        onPress={() => props.navigation.navigate("addcustomer")}
        title="Add New Customer"
      />
      <AddingMenu
        onPress={() => props.navigation.navigate("addproduct")}
        title="Add New Product"
      />
      <AddingMenu
        onPress={() => props.navigation.navigate("addorder")}
        title="Add New Order"
      />
    </View>
  );
};

export default AddingScreen;
