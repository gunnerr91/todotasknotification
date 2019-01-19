import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import firebase from "@firebase/app";
import "@firebase/auth";
import LoginForm from "./components/LoginForm";

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
