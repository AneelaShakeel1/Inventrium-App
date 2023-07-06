import React from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import Customer from "../Components/Customer";
import colors from "../Constants/colors";

const AllCustomersScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.Heading}>
          <Text style={styles.headingTitle}>All Customers</Text>
        </View>
        <View style={styles.customersBackground}>
          <Customer
            customerName="Aneela Shakeel"
            productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia"
          />
          <Customer
            customerName="Hasham Uddin"
            productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia"
          />
          <Customer
            customerName="Yusra Aqeel"
            productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia"
          />
          <Customer
            customerName="Usama Khan"
            productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia"
          />
          <Customer
            customerName="Hammad Ali"
            productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia"
          />
          <Customer
            customerName="Reena Shakeel"
            productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia"
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
    height: "10%",
  },
  headingTitle: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 100,
    marginTop: 5,
    marginBottom: 15,
  },
  customersBackground: {
    height: "90%",
  },
});

export default AllCustomersScreen;
