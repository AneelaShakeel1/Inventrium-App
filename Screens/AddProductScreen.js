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

const AddProductScreen = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [payment, setPayment] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const userData = await getDataFromAsyncStorage("userData");
    const token = await getDataFromAsyncStorage("token");

    try {
      const urlencoded = new URLSearchParams();
      urlencoded.append("product_name", name);
      urlencoded.append("description", description);
      urlencoded.append("price", price);
      urlencoded.append("payment", payment);
      urlencoded.append("seller_name", sellerName);

      const response = await fetch(
        `https://fine-red-cygnet-suit.cyclic.app/api/v1/create/product?user_id=${userData.id}`,
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

        Alert.alert("create product successfully");
        props.navigation.navigate("add");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        console.error("create product failed:", errorMessage);

        Alert.alert("some thing went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.productFieldsBackground}>
          <View style={styles.productFields}>
            <View style={{ height: 120 }}>
              <Text style={styles.productTitle}>Add New Product</Text>
            </View>
            <MyInput
              onChangeText={(e) => setName(e)}
              value={name}
              placeHolder="Enter Product Name"
            />
            <MyInput
              onChangeText={(e) => setSellerName(e)}
              value={sellerName}
              placeHolder="Enter Product Seller Name"
            />
            <MyInput
              onChangeText={(e) => setDescription(e)}
              value={description}
              placeHolder="Enter Product Description"
            />
            <MyInput
              onChangeText={(e) => setPrice(e)}
              value={price}
              placeHolder="Enter Product Price"
            />
            <MyInput
              onChangeText={(e) => setPayment(e)}
              value={payment}
              placeHolder="Enter Product payment status"
            />
            
            <Button onPress={handleSubmit} btnTitle="Create Product" />
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
  productTitle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: colors.bgWhite,
    fontSize: 30,
    fontWeight: "bold",
  },

  productFieldsBackground: {
    height: 1000,
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 250,
  },
  productFields: {
    height: "100%",
    width: "90%",
    marginTop: 200,
    alignItems: "center",
  },
});
export default AddProductScreen;
