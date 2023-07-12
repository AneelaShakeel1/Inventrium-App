import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Order from "../Components/Order";
import ProductsImage from "../assets/Images/ProductsImage.jpg";

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

const AllOrdersScreen = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchOrder = async () => {
    try {
      const userData = await getDataFromAsyncStorage("userData");
      const token = await getDataFromAsyncStorage("token");

      const response = await fetch(
        `https://fine-red-cygnet-suit.cyclic.app/api/v1/fetch/order?user_id=${userData.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "x-access-token": `${token}`,
          },
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        if (responseData?.data.length > 0) {
          setData(responseData.data);
        } else {
          setData([]);
        }
      } else {
        if (response.status === 404) {
          setError("Resource not found");
        } else {
          setError("Something went wrong");
        }
      }
    } catch (error) {
      console.error(error);
      setError("Network error");
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.Heading}>
          <Text style={styles.headingTitle}>All Orders</Text>
        </View>
        <View>
          {data.map((v, i) => (
            <Order
              key={i}
              productHeading={v?.product_name}
              customer={v?.customer_name}
              deliveryDate={v?.delivery_date}
              payment={v?.payment}
              productPrice={v?.price}
              image={ProductsImage}
            />
          ))}
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
    height: 70,
  },
  headingTitle: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 125,
    marginTop: 10,
  },
});
export default AllOrdersScreen;
