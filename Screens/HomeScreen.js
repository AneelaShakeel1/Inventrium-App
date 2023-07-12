import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Menu from "../Components/Menu";
import colors from "../Constants/colors";
import Button from "../Components/Button";

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.buttonBackground}>
          <Button
            btnTitle="ADD"
            onPress={() => {
              props.navigation.navigate("add");
            }}
          />
        </View>
        <View>
          <Menu
            onPress={() => props.navigation.navigate("allcustomers")}
            Name="person"
            Title="Customers"
          />
          <Menu
            onPress={() => props.navigation.navigate("allproducts")}
            Name="md-basket"
            Title="Products"
          />
          <Menu
            onPress={() => props.navigation.navigate("allorders")}
            Name="md-cart"
            Title="Orders"
          />
           <Menu
            onPress={() => props.navigation.navigate("allorders")}
            Name="md-receipt"
            Title="Account Receivable"
          />
           <Menu
            onPress={() => props.navigation.navigate("allorders")}
            Name="md-wallet"
            Title="Account Payable"
          />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.bgWhite,
    marginTop: 25,
  },
  buttonBackground: {
    marginLeft: 240,
    marginBottom: 5,
  },
});

export default HomeScreen;
