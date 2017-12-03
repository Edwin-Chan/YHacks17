import React, { Component } from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { StyleSheet } from "react-native";
import {  ScrollView } from "react-native";

import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";
import HomeScreen from "../HomeScreen";

export default class LucyChat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { navigate } = this.props.navigation;
    const tableHead = ['Base Price', 'AD_D', 'Deductible', 'Coverage($)'];
    const tableTitle = ['Bronze', 'Silver', 'Gold', 'Platinum'];
    const tableData = [
      ['20', '10000', '8000', '100000'],
      ['40', '20000', '7000', '100000'],
      ['70', '30000', '5000', '100000'],
      ['110', '50000', '3000', '100000']
    ];
    const widthArr = [100,100,100,100];
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
            <Title>Plans</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
         <View>

         <Text style={{ color:'blue',textAlign:'center',marginTop: 20 }}>
         The following are plans offered by Our Company, Vitech
         </Text>
         <Table style={styles.table}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 80}}>
            <Cell data="Plan Name" style={styles.head} textStyle={styles.headText}/>
            {
              tableTitle.map((title, i) => (
                <Cell key={i} data={title} height={28} style={i%2 && {backgroundColor: '#DFF5F2'}} textStyle={styles.titleText}/>
              ))
            }
          </TableWrapper>
 
          {/* Right scrollview Wrapper */}
          <ScrollView horizontal={true}>
            {/* If parent element is not table element, you should add the type of borderstyle. */}
            <TableWrapper borderStyle={{borderWidth: 1,borderColor: '#000',}}>
              <Row data={tableHead} style={styles.head} textStyle={styles.headText} widthArr={widthArr}/>
              {
                tableData.map((data, i) => (
                  <Row key={i} data={data} style={[styles.list, i%2 && {backgroundColor: '#DFF5F2'}]} widthArr={widthArr} textStyle={styles.listText}/>
                ))
              }
            </TableWrapper>
          </ScrollView>
        </Table>
      </View>

          <Button rounded danger
            style={{ marginTop: 5, alignSelf: "center" }}
            onPress={() => navigate("Information")}>
            <Text>Next</Text>

          </Button>

        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
   table: { width: 400, flexDirection: 'row' },
  head: { backgroundColor: '#333', height: 50 },
  headText: { color: '#fff', textAlign: 'center' },
  titleText: { marginLeft: 6 },
  list: { height: 28, backgroundColor: '#f0f0f0' },
  listText: { textAlign: 'right', marginRight: 6 }
})
