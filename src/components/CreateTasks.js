import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import Card from "./shared/Card";
import CardSection from "./shared/CardSection";
import Input from "./shared/Input";
import Button from "./shared/Button";
import { connect } from "react-redux";
import { updateTask, createTask } from "./../actions/CreateTaskActions";

class CreateTasks extends Component {
  onCreateTask() {
    const { task, notes, deadline } = this.props;
    this.props.createTask({ task, notes, deadline: deadline || "Monday" });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Task"
            placeholder="your task header"
            value={this.props.task}
            onChangeHandler={value =>
              this.props.updateTask({ prop: "task", value })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Notes"
            placeholder="any additional notes"
            value={this.props.notes}
            onChangeHandler={value =>
              this.props.updateTask({ prop: "notes", value })
            }
          />
        </CardSection>
        <CardSection customStyle={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 12, paddingLeft: 18 }}>Deadline</Text>
          <Picker
            selectedValue={this.props.deadline}
            onValueChange={value =>
              this.props.updateTask({ prop: "deadline", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onCreateTask.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { task, notes, deadline } = state.task;
  return {
    task,
    notes,
    deadline
  };
};

export default connect(
  mapStateToProps,
  { updateTask, createTask }
)(CreateTasks);
