import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import MyInput from "../Components/MyInput";
import Button from "../Components/Button";
import colors from "../Constants/colors";

const BuyASubscriptionScreen = (props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.subscriptionFieldsBackground}>
          <View style={styles.subscriptionFields}>
            <View style={{ height: 120 }}>
              <Text style={styles.subscriptionTitle}>Subscription</Text>
              <Text style={styles.subSubscriptionTitle}>
                Buy A Subscription
              </Text>
            </View>
            <MyInput placeHolder="Enter your Name" />
            <MyInput secure placeHolder="Enter your Card Number" />
            <MyInput placeHolder="Enter Expiry Date" />
            <MyInput placeHolder="Enter your CVC" />
            <Button
              btnTitle="BUY"
              onPress={() => props.navigation.navigate("home")}
            />
          </View>
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
  subscriptionTitle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: colors.bgWhite,
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },
  subSubscriptionTitle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: colors.bgWhite,
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 70,
    marginLeft: 50,
  },

  subscriptionFieldsBackground: {
    height: 1000,
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 250,
  },
  subscriptionFields: {
    height: "100%",
    width: "90%",
    marginTop: 200,
    alignItems: "center",
  },
});

export default BuyASubscriptionScreen;
