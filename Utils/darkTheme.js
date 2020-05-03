import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export class darkTheme extends React.Component {
  constructor(props) {
      super(props);
    this.toggleTheme = this.toggleTheme.bind(this)
    this.state = {
      toggle: true
    }
    }

    toggleTheme() {
        this.setState({
          toggle: this.state.toggle ? false : true
  
        })
        console.log("toggle")
        console.log(this.state.toggle)
    }

}


export const darkStyles = StyleSheet.create({
        container: {
         backgroundColor:"black"
        },
        text: {
         color:"white"
        }
      });