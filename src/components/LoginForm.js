import React, { Component } from "react";
import { Text, View } from "react-native";
import Card from "./shared/Card";
import CardSection from "./shared/CardSection";
import Button from "./shared/Button";
import Input from "./shared/Input";
import { connect } from "react-redux";
import { onEmailChange } from "./../actions/Index";
import { bindActionCreators } from "redux";

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
            onChangeHandler={email => this.props.onEmailChange(email)}
            value={this.props.email}
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

const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEmailChange: email => {
      dispatch(onEmailChange(email));
    }
  };
};

export default connect(
  mapStateToProps,
  { onEmailChange }
)(LoginForm);
