import React from "react";
import { View, Text } from "react-native";
import Card from "./shared/Card";
import CardSection from "./shared/CardSection";
import Input from "./shared/Input";
import Button from "./shared/Button";

const CreateTasks = () => {
  return (
    <Card>
      <CardSection>
        <Input label="Task" placeholder="your task header" />
      </CardSection>
      <CardSection>
        <Input label="Notes" placeholder="any additional notes" />
      </CardSection>
      <CardSection>
        <Button>Create</Button>
      </CardSection>
    </Card>
  );
};

export default CreateTasks;
