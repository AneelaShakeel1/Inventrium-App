import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert } from "react-native";
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

const AddCustomerScreen = (props) => {


  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const userData = await getDataFromAsyncStorage("userData");
    const token = await getDataFromAsyncStorage("token");

    console.log(userData,'userData')
    console.log(token,'token')
    try {
      const urlencoded = new URLSearchParams();
      urlencoded.append("customer_name", name);
      urlencoded.append("description", description);


      const response = await fetch(
        `https://scary-yak-costume.cyclic.app/api/v1/create/customer?user_id=${userData.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "x-access-token":`${token}`
          },
          body: urlencoded.toString(),
        }
      );

      console.log(response, 'error')
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        // await AsyncStorage.setItem("userData", JSON.stringify(userData));

        Alert.alert(
          "create customer successfully"
        )
        props.navigation.navigate("add");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        console.error("Signup failed:", errorMessage);

        Alert.alert(
          "some thing went wrong"
        )
      }
    } catch (error) {
      console.error(error);
    }



  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.customerFieldsBackground}>
          <View style={styles.customerFields}>
            <View style={{ height: 120 }}>
              <Text style={styles.customerTitle}>Add New Customer</Text>
            </View>
            <MyInput onChangeText={(e) => setName(e)}
              value={name}
              placeHolder="Enter Customer Name" />
            <MyInput onChangeText={(e) => setDescription(e)}
              value={description}

              placeHolder="Enter Product Description" />
            <Button
              onPress={handleSubmit} btnTitle="Create Customer" />
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
