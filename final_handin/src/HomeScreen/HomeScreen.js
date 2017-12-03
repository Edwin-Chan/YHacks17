import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
export default class HomeScreen extends React.Component {
  render() {
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
            <Title>Welcome!</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text style={{color: 'blue',textAlign:'center',textShadowRadius: 2,fontWeight:'200',fontSize:20}}>Welcome to Vitech Insurance prediction Application!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded black
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Join")}>
            <Text>See more about the plans</Text>
          </Button>
          <Button full rounded primary 
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("About")}>
            <Text>About the Project</Text>
          </Button>
          <Body>
          <Text>  </Text>
          <Text>  </Text>
                <Text style={{color: 'blue',textAlign:'center',textShadowRadius: 2,fontWeight:'200',fontSize:20}}>  V.1.0</Text>
              </Body>
        </Content>
      </Container>
    );
  }
}
