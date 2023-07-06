import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import Order from "../Components/Order";
import Product from "../Components/Product";
import Gift from "../assets/Images/Gift.jpg";
import Perfume from "../assets/Images/Perfume.jpg";
import Shampo from "../assets/Images/Shampo.jpg";
import Mascara from "../assets/Images/Mascara.jpg";


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
            image={Shampo}
            />
            <Order
            productHeading="Gift Box"
            customer="Customer:Hasham"
            deliveryDate="Delivery Date:12/06/2023"
            payment="Payment:Delay"
            productPrice="Rs:1000"
            image={Gift}
            />
            <Order
            productHeading="Mascara"
            customer="Customer:Hasham"
            deliveryDate="Delivery Date:12/06/2023"
            payment="Payment:Delay"
            productPrice="Rs:1000"
            image={Mascara}
            />
            <Order
            productHeading="Perfume"
            customer="Customer:Hasham"
            deliveryDate="Delivery Date:12/06/2023"
            payment="Payment:Delay"
            productPrice="Rs:1000"
            image={Perfume}
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
