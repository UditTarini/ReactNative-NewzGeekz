import React  from 'react';
import { WebView } from 'react-native-webview';
import {Text} from 'react-native'
import {Icon, Content} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
export default class ViewScreen extends React.Component {
 
  
    static navigationOptions = 
  ({ navigation }) => 
  ({ headerLeft: 
    
    <Icon name={'md-arrow-back'}
     color='#ffffff' 
     style={{paddingLeft: 20,fontSize: 20 }} 
     onPress={ () => { navigation.goBack() }} />,
     title: 'NewzGeekz',
     headerStyle: {height:40},
     headerTitleStyle: { 
        color: "#000",
        alignSelf: 'center',
        fontSize: 12
         } });

  render() {

    const url = this.props.navigation.getParam("url", null);
    if( url != null ) {
      
      return (
     
      <WebView 
      source={{uri:url}} style={{flex: 1}}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState
      scalesPageToFit
        />
     
    );
      } else {
        return(
            <Text>not found</Text>

        )
   
   
    }
  }
}