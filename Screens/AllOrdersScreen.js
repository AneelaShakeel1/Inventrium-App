import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import Order from "../Components/Order";
import ProductsImage from '../assets/Images/ProductsImage.jpg'


const AllOrdersScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.Heading}>
          <Text style={styles.headingTitle}>All Orders</Text>
        </View>
        <View>
            <Order
            productHeading="Shampo"
            customer="Customer:Hasham"
            deliveryDate="Delivery Date:12/06/2023"
            payment="Payment:Delay"
            productPrice="Rs:1000"
            image={ProductsImage}
            />
            <Order
            productHeading="Gift Box"
            customer="Customer:Hasham"
            deliveryDate="Delivery Date:12/06/2023"
            payment="Payment:Delay"
            productPrice="Rs:1000"
            image={ProductsImage}
            />
            <Order
            productHeading="Mascara"
            customer="Customer:Hasham"
            deliveryDate="Delivery Date:12/06/2023"
            payment="Payment:Delay"
            productPrice="Rs:1000"
            image={ProductsImage}
            />
            <Order
            productHeading="Perfume"
            customer="Customer:Hasham"
            deliveryDate="Delivery Date:12/06/2023"
            payment="Payment:Delay"
            productPrice="Rs:1000"
            image={ProductsImage}
            />
            <Order
            
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
