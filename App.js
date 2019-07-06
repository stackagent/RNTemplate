import React from 'react';
import { HomePage, AboutPage } from './src/pages';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { NavBar } from './src/components/Layouts/NavBar/NavBar';
import * as Font from 'expo-font';

import { Provider } from 'react-redux'
import { store } from './src/store';


// const NavBarComponent = (props) => (<NavBar {...props} />);
const AppNavigator = createAppContainer(createBottomTabNavigator({
  Home: HomePage,
  About: AboutPage
},
  {
    tabBarComponent: props =>
      <NavBar
        {...props}
      />,
  }
));
// const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ isReady: true });
  }

  render() {
    return (
      this.state.isReady ? (
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      ) : null
    );
  }
}
