import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

// import HomeScene from './app/scene/home/homeScene';
import LoginScene from './src/scenes/profile/loginScene';
// import RegisterScene from './app/scene/profile/registerScene';

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScene
    //   },
    //   Home: {
    //     screen: HomeScene
    //   },
    //   Register: {
    //     screen: RegisterScene
      }
}, {
    initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);
