import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import Product from "../Components/Product";
import ProductsImage from '../assets/Images/ProductsImage.jpg'
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

const AllProductsScreen = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      const userData = await getDataFromAsyncStorage("userData");
      const token = await getDataFromAsyncStorage("token");

      const response = await fetch(
        `https://fine-red-cygnet-suit.cyclic.app/api/v1/fetch/product?user_id=${userData.id}`,
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
    fetchProduct();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.Heading}>
          <Text style={styles.headingTitle}>All Products</Text>
        </View>
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <View>
            {data.map((v, i) => (
              <Product
                key={i}
                productHeading={v?.product_name}
                productSellerName={v?.seller_name}
                productDescription={v?.description}
                productPrice={v?.price}
                productPayment={v?.payment}
                image={ProductsImage}
              />
            ))}
          </View>
        )}
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
    marginLeft: 115,
    marginTop: 10,
  },
  errorText: {
    textAlign: "center",
    fontSize: 18,
    color: "red",
    marginTop: 20,
  },
});

export default AllProductsScreen;
