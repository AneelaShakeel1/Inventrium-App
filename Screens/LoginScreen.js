import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MyInput from "../Components/MyInput";
import Button from "../Components/Button";
import colors from "../Constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const urlencoded = new URLSearchParams();
      urlencoded.append("email", email);
      urlencoded.append("password", password);

      const response = await fetch(
        "https://fine-red-cygnet-suit.cyclic.app/api/v1/Login",
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
          email,
          password,
          id: data.data._id,
        };

        await AsyncStorage.setItem("userData", JSON.stringify(userData));
        await AsyncStorage.setItem("token", JSON.stringify(data.token));

        props.navigation.navigate("home");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        console.error("Login failed:", errorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.loginFieldsBackground}>
          <View style={styles.loginFields}>
            <View style={{ height: 120 }}>
              <Text style={styles.loginTitle}>Welcome Back</Text>
              <Text style={styles.subLoginTitle}>Login to Your Account</Text>
            </View>
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
            <Button btnTitle="LOGIN" onPress={handleLogin} />

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("signup");
              }}
            >
              <Text style={styles.titleGoToSignUp}>
                Don't have an account? SIGN UP?
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
  loginTitle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: colors.bgWhite,
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subLoginTitle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: colors.bgWhite,
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 70,
    marginLeft: 40,
  },

  loginFieldsBackground: {
    height: 1000,
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 250,
  },
  loginFields: {
    height: "100%",
    width: "90%",
    marginTop: 200,
    alignItems: "center",
  },
  titleGoToSignUp: {
    color: colors.bgWhite,
    marginTop: 20,
    fontWeight: "bold",
  },
});

export default LoginScreen;
