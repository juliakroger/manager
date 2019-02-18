import  React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './Containers/LoginForm';
import EmployeeList from './Containers/EmployeeList';
import EmployeeCreate from './Containers/EmployeeCreate';

const RouterComponent = () => {
  return (
      <Router>
      <Scene key="root">
        <Scene key="auth" hideNavBar>
        <Scene key="login" component={LoginForm} title="Login" initial />
        </Scene>
            <Scene
            rightTitle="Add"
            onRight={() => { Actions.EmployeeCreate() }}
            key="EmployeeList" component={EmployeeList} title="Employees" />
            <Scene key="EmployeeCreate" component={EmployeeCreate} title="Create Employee" />
        </Scene>
      </Scene>
      </Router>
  );
}


export default RouterComponent;
