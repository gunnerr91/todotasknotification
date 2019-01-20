import React from "react";
import { View, Text } from "react-native";
import Card from "./shared/Card";
import CardSection from "./shared/CardSection";
import Input from "./shared/Input";
import Button from "./shared/Button";
import { connect } from "react-redux";
import { updateTask } from "./../actions/CreateTaskActions";

const CreateTasks = props => {
  return (
    <Card>
      <CardSection>
        <Input
          label="Task"
          placeholder="your task header"
          value={props.task}
          onChangeHandler={value => props.updateTask({ prop: "task", value })}
        />
      </CardSection>
      <CardSection>
        <Input
          label="Notes"
          placeholder="any additional notes"
          value={props.notes}
          onChangeHandler={value => props.updateTask({ prop: "notes", value })}
        />
      </CardSection>
      <CardSection>
        <Button>Create</Button>
      </CardSection>
    </Card>
  );
};

mapStateToProps = state => {
  const { task, notes, deadline } = state.auth;
  return {
    task,
    notes,
    deadline
  };
};

export default connect(
  mapStateToProps,
  { updateTask }
)(CreateTasks);
