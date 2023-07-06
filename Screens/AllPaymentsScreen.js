import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import Payment from "../Components/Payment";

const AllPaymentsScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.Heading}>
          <Text style={styles.headingTitle}>All Payments</Text>
        </View>
        <View>
          <Payment
            paymentMethod="Cash"
            customer="Customer:Aneel Shakeel"
            Payment="Payment:Delay"
            paymentPrice="Rs:1000"
          />
          <Payment
            paymentMethod="Cash"
            customer="Customer:Aneel Shakeel"
            Payment="Payment:Delay"
            paymentPrice="Rs:1000"
          />
          <Payment
            paymentMethod="Cash"
            customer="Customer:Aneel Shakeel"
            Payment="Payment:Delay"
            paymentPrice="Rs:1000"
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
    marginTop: 25,
  },
  Heading: {
    height: 50,
  },
  headingTitle: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 115,
    marginTop: 10,
  },
});
export default AllPaymentsScreen;
