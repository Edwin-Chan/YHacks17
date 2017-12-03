import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";
import HomeScreen from "../HomeScreen";
export default class Information extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Information</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
        <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Name</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Date of Birth</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Sex</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>City</Label>
            <Input />
          </Item>
          
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Address</Label>
            <Input />
          </Item>
          
           <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>State</Label>
            <Input />
          </Item>
          <Button rounded danger
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={() => navigate("Spinning")}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

