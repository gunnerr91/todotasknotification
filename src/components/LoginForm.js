import React, { Component } from "react";
import { Text, View } from "react-native";
import Card from "./shared/Card";
import CardSection from "./shared/CardSection";
import Button from "./shared/Button";
import Input from "./shared/Input";

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="email address" />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="password" />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
