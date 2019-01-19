import React, { Component } from "react";
import { Text, View } from "react-native";
import Card from "./shared/Card";
import CardSection from "./shared/CardSection";
import Button from "./shared/Button";
import Input from "./shared/Input";
import { connect } from "react-redux";
import { onEmailChange, onPasswordChange, onLogin } from "./../actions/Index";
import { bindActionCreators } from "redux";
import Spinner from "./shared/Spinner";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.onEmailChange(text);
  }

  onPasswordChange(text) {
    this.props.onPasswordChange(text);
  }

  onLoginSubmit() {
    const { email, password } = this.props;
    this.props.onLogin({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.errorText}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <CardSection>
        <Button onPress={this.onLoginSubmit.bind(this)}>Login</Button>
      </CardSection>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email address"
            onChangeHandler={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeHandler={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        {this.renderButton()}
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email: email,
    password: password,
    error: error,
    loading: loading
  };
};

export default connect(
  mapStateToProps,
  { onEmailChange, onPasswordChange, onLogin }
)(LoginForm);

const styles = {
  errorText: {
    color: "red",
    alignSelf: "center",
    fontSize: 20
  }
};
