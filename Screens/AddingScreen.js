import { View, Text } from "react-native";
import React from "react";
import AddingMenu from "../Components/AddingMenu";

const AddingScreen = (props) => {
  return(
    <View style={{marginTop:60}}>
       <AddingMenu 
       onPress={()=>props.navigation.navigate('addcustomer')}
       title="Add New Customer" />
       <AddingMenu
       onPress={()=>props.navigation.navigate('addproduct')}
        title="Add New Product" />
       <AddingMenu 
       onPress={()=>props.navigation.navigate('addorder')}
       title="Add New Order" />
      
    </View>
    

  )
};

export default AddingScreen;



