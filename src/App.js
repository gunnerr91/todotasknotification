import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import firebase from "@firebase/app";
import "@firebase/auth";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDoy2KQCYx0pU8_SQLfeWHoLUFeCY_zybI",
      authDomain: "todotasknotification.firebaseapp.com",
      databaseURL: "https://todotasknotification.firebaseio.com",
      projectId: "todotasknotification",
      storageBucket: "todotasknotification.appspot.com",
      messagingSenderId: "990134981295"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello world</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
