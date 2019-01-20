import React from "react";
import { Router, Scene, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import TodoTasks from "./components/TodoTasks";
import CreateTasks from "./components/CreateTasks";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            key="todoTasks"
            component={TodoTasks}
            title="To do tasks"
            rightTitle="Add"
            onRight={() => {
              Actions.createTasks();
            }}
            initial
          />
          <Scene
            key="createTasks"
            component={CreateTasks}
            title="Create task"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
