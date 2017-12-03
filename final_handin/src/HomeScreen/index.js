import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../InfoScreen/index.js";
import Profile from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
import { updateFocus } from 'react-navigation-is-focused-hoc'

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Join: { screen: MainScreenNavigator,onNavigationStateChange:(prevState, currentState) => {
          updateFocus(currentState);
        } },
    About: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
