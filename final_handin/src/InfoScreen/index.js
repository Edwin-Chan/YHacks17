import React, { Component } from "react";
import Plans from "./Plans.js";
import Information from "./Information.js";
import Spinning from "./Spinning.js";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";

export default (MainScreenNavigator = TabNavigator(
  {
    Plans: { screen: Plans },
    Information: { screen: Information },
    Spinning: {screen: Spinning}

  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Plans")}>
              <Icon name="bowtie" />
              <Text>Plans</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Information")}>
              <Icon name="briefcase" />
              <Text>Information</Text>
            </Button>
            
          </FooterTab>
        </Footer>
      );
    }
  }
));
