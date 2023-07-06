import React from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import colors from "../Constants/colors";
import Product from "../Components/Product";
import Gift from "../assets/Images/Gift.jpg";
import Oil from "../assets/Images/Oil.jpg";
import Perfume from "../assets/Images/Perfume.jpg";
import Shampo from "../assets/Images/Shampo.jpg";
import Mascara from "../assets/Images/Mascara.jpg";

const AllProductsScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.Heading}>
          <Text style={styles.headingTitle}>All Products</Text>
        </View>
        <View>
          <Product
            productHeading="Perfume"
            productDescription="At the heart of Enchanted Essence lies a delicate blend of bl
            ooming flowers, evoking a sense of ethereal beauty. "
            image={Perfume}
          />
          <Product
            productHeading="Organic Oil"
            productDescription="At the heart of Enchanted Essence lies a delicate blend of bl
            ooming flowers, evoking a sense of ethereal beauty. "
            image={Oil}
          />
          <Product
            productHeading="Gift Box"
            productDescription="At the heart of Enchanted Essence lies a delicate blend of bl
            ooming flowers, evoking a sense of ethereal beauty. "
            image={Gift}
          />

          <Product
            productHeading="Shampoo"
            productDescription="At the heart of Enchanted Essence lies a delicate blend of bl
            ooming flowers, evoking a sense of ethereal beauty. "
            image={Shampo}
          />
          <Product
            productHeading="Mascara"
            productDescription="At the heart of Enchanted Essence lies a delicate blend of bl
            ooming flowers, evoking a sense of ethereal beauty. "
            image={Mascara}
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
    marginLeft: 115,
    marginTop: 10,
  },
});

export default AllProductsScreen;
