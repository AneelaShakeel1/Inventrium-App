import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import MyInput from "../Components/MyInput";
import colors from "../Constants/colors";
import Button from "../Components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const AddOrderScreen = (props) => {
  const [customerName, setCustomerName] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [payment, setPayment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const userData = await getDataFromAsyncStorage("userData");
    const token = await getDataFromAsyncStorage("token");

    try {
      const urlencoded = new URLSearchParams();
      urlencoded.append("customer_name", customerName);
      urlencoded.append("product_name", productName);
      urlencoded.append("price", price);
      urlencoded.append("delivery_date", deliveryDate);
      urlencoded.append("payment", payment);

      const response = await fetch(
        `https://fine-red-cygnet-suit.cyclic.app/api/v1/create/order?user_id=${userData.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "x-access-token": `${token}`,
          },
          body: urlencoded.toString(),
        }
      );

      console.log(response, "error");
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        Alert.alert("create order successfully");
        props.navigation.navigate("add");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        console.error("create order failed:", errorMessage);

        Alert.alert("some thing went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.orderFieldsBackground}>
          <View style={styles.orderFields}>
            <View style={{ height: 120 }}>
              <Text style={styles.orderTitle}>Add New Order</Text>
            </View>
            <MyInput
              onChangeText={(e) => setCustomerName(e)}
              value={customerName}
              placeHolder="Enter Customer Name"
            />
            <MyInput
              onChangeText={(e) => setProductName(e)}
              value={productName}
              placeHolder="Enter Product Name"
            />
            <MyInput
              onChangeText={(e) => setPrice(e)}
              value={price}
              placeHolder="Enter Price"
            />
            <MyInput
              onChangeText={(e) => setDeliveryDate(e)}
              value={deliveryDate}
              placeHolder="Enter Delivery Date"
            />
            <MyInput
              onChangeText={(e) => setPayment(e)}
              value={payment}
              placeHolder="Enter payment status"
            />
            <Button onPress={handleSubmit} btnTitle="Create Order" />
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
  orderTitle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: colors.bgWhite,
    fontSize: 30,
    fontWeight: "bold",
  },

  orderFieldsBackground: {
    height: 1000,
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 250,
  },
  orderFields: {
    height: "100%",
    width: "90%",
    marginTop: 200,
    alignItems: "center",
  },
});
export default AddOrderScreen;
