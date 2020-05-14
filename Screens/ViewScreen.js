import React  from 'react';
import { WebView } from 'react-native-webview';
import {Text, View} from 'react-native'
import {Icon} from 'native-base'

import HeaderBar from "../Utils/HeaderBar"
import { SafeAreaView } from 'react-navigation';
export default class ViewScreen extends React.Component {
  render() {

    const url = this.props.navigation.getParam("url", null);
    if( url != null ) {
      
      return (
        <View  style={{ flex: 1 }}>
        <HeaderBar height={22} fontSize={8} capFontSize={12}  />
      <WebView 
      
      source={{ uri: url }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState
      scalesPageToFit />
        </View>
    );
      } else {
        return(
            <Text>not found</Text>

        )
   
   
    }
  }
}