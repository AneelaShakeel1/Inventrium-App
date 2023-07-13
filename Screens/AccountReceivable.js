import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Receive from "../Components/Receive";

const getDataFromAsyncStorage = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    } else {
      console.log("Data not found");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
};

const AccountReceivable = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchAccountReceivable = async () => {
    try {
      const userData = await getDataFromAsyncStorage("userData");
      const token = await getDataFromAsyncStorage("token");

      const response = await fetch(
        `https://fine-red-cygnet-suit.cyclic.app/api/v1/fetch/account/receivable?user_id=${userData.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.data.length > 0) {
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
    fetchAccountReceivable();
  }, []);

  return (
    <View>
      <Text style={styles.headingTitle}>Account Receivable</Text>
      <View>
        {data.map((v, i) => (
          <Receive key={i} price={v.price} customerName={v.customer_name} />
        ))}
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  headingTitle: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 85,
    marginTop: 35,
  },
});

export default AccountReceivable;
