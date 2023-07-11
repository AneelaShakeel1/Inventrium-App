import { View, Text } from "react-native";
import React from "react";
import AddingMenu from "../Components/AddingMenu";

const AddingScreen = (props) => {
  return(
    <View style={{marginTop:60}}>
       <AddingMenu 
       onPress={()=>props.navigation.navigate('addcustomer')}
       title="Add New Customer" />
       <AddingMenu title="Add New Product" />
       <AddingMenu title="Add New Order" />
       <AddingMenu title="Add New Payment" />
    </View>
    

  )
};

export default AddingScreen;



