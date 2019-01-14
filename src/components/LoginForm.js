import React, { Component } from "react";
import { Text, View } from "react-native";
import Card from "./shared/Card";
import CardSection from "./shared/CardSection";
import Button from "./shared/Button";
import Input from "./shared/Input";
import { connect } from "react-redux";
import { onEmailChange } from "./../actions/Index";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.onEmailChange(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email address"
            onChangeText={this.onEmailChange.bind(this)}
          />
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

export default connect(
  null,
  { onEmailChange }
)(LoginForm);
