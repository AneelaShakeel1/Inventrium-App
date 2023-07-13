import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyInput from "../Components/MyInput";
import Button from "../Components/Button";
import colors from "../Constants/colors";

const SignUpScreen = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      const urlencoded = new URLSearchParams();
      urlencoded.append("first_name", firstName);
      urlencoded.append("last_name", lastName);
      urlencoded.append("email", email);
      urlencoded.append("password", password);

      const response = await fetch(
        "https://fine-red-cygnet-suit.cyclic.app/api/v1/Signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlencoded.toString(),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        const userData = {
          firstName,
          lastName,
          email,
          password,
          id: data.data._id,
        };

        await AsyncStorage.setItem("userData", JSON.stringify(userData));
        await AsyncStorage.setItem("token", JSON.stringify(data.token));

        props.navigation.navigate("buyasubscription");
        alert("Signed Up Successfully ");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        console.error("Signup failed:", errorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.signUpFieldsBackground}>
          <View style={styles.signUpFields}>
            <View style={{ height: 130 }}>
              <Text style={styles.signUpTitle}>Register</Text>
              <Text style={styles.subSignUpTitle}>Create Your New Account</Text>
            </View>
            <MyInput
              placeHolder="Enter your First Name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
            <MyInput
              placeHolder="Enter your Last Name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
            <MyInput
              placeHolder="Enter your email address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <MyInput
              secure
              placeHolder="Enter your password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Button btnTitle="SIGNUP" onPress={handleSignUp} />
            <TouchableOpacity
              onPress={() => props.navigation.navigate("login")}
            >
              <Text style={styles.titleGoToLogin}>
                Already Have An Account?
              </Text>
            </TouchableOpacity>
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
  signUpTitle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: colors.bgWhite,
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subSignUpTitle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: colors.bgWhite,
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 70,
    marginLeft: 25,
  },

  signUpFieldsBackground: {
    height: 1000,
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 250,
  },
  signUpFields: {
    height: "100%",
    width: "90%",
    marginTop: 200,
    alignItems: "center",
  },
  titleGoToLogin: {
    color: colors.bgWhite,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default SignUpScreen;
