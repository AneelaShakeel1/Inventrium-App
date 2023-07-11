import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import MyInput from "../Components/MyInput";
import colors from "../Constants/colors";
import Button from "../Components/Button";

const AddCustomerScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.customerFieldsBackground}>
          <View style={styles.customerFields}>
            <View style={{ height: 120 }}>
              <Text style={styles.customerTitle}>Add New Customer</Text>
            </View>
            <MyInput placeHolder="Enter Customer Name" />
            <MyInput placeHolder="Enter Product Description" />
            <Button btnTitle="Create Customer" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddCustomerScreen;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.bgWhite,
    marginTop: 25,
  },
  customerTitle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: colors.bgWhite,
    fontSize: 30,
    fontWeight: "bold",
  },

  customerFieldsBackground: {
    height: 1000,
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 250,
  },
  customerFields: {
    height: "100%",
    width: "90%",
    marginTop: 200,
    alignItems: "center",
  },
});
