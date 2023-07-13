import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyInput from "../Components/MyInput";
import Button from "../Components/Button";
import colors from "../Constants/colors";

const getDataFromAsyncStorage = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    } else {
      console.log("data not found");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
};

const BuyASubscriptionScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState("");

  const handleSubscription = async () => {
    try {
      const userData = await getDataFromAsyncStorage("userData");
      if (!userData) {
        console.log("User data not found");
        return;
      }

      const urlencoded = new URLSearchParams();
      urlencoded.append("name", name);
      urlencoded.append("email", email);
      urlencoded.append("cardNumber", cardNumber);
      urlencoded.append("expMonth", expMonth);
      urlencoded.append("expYear", expYear);
      urlencoded.append("cvc", cvc);
      urlencoded.append("user_id", userData.id);

      const response = await fetch(
        "https://fine-red-cygnet-suit.cyclic.app/api/v1/create/subscription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlencoded.toString(),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        const userSubscriptionData = {
          name,
          email,
          cardNumber,
          expMonth,
          expYear,
          cvc,
        };
        await AsyncStorage.setItem(
          "userSubscriptionData",
          JSON.stringify(userSubscriptionData)
        );

        props.navigation.navigate("home");
        alert("Subscribed Successfully")
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        console.error("Subscription failed:", errorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  };
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
            <MyInput
              placeHolder="Enter your Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <MyInput
              placeHolder="Enter your Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <MyInput
              secure
              placeHolder="Enter your Card Number"
              value={cardNumber}
              onChangeText={(text) => setCardNumber(text)}
            />
            <MyInput
              placeHolder="Enter Expiry Month"
              value={expMonth}
              onChangeText={(text) => setExpMonth(text)}
            />
            <MyInput
              placeHolder="Enter Expiry Year"
              value={expYear}
              onChangeText={(text) => setExpYear(text)}
            />
            <MyInput
              secure
              placeHolder="Enter your CVC"
              value={cvc}
              onChangeText={(text) => setCvc(text)}
            />
            <Button btnTitle="BUY" onPress={handleSubscription} />
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
