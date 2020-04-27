import React from 'react';
import { StyleSheet,Alert,TouchableOpacity , ActivityIndicator,  Image, View, SafeAreaView } from 'react-native';
import { Container, Header,List, Content, Card, CardItem, Thumbnail,Text,  Button, Icon, Left, Body, Right } from 'native-base';

import TimeAgo from '../Components/time';

// import CardView from "../Components/CardView"
import { getArticles } from '../FetchData/NewsData';


export default class NewzScreen extends React.Component {
  static navigationOptions = 
  ({ navigation }) => 
  ({ headerLeft: ()=>
    
    <Icon name={'md-arrow-back'}
     size={30} color='#ffffff' 
     style={{paddingLeft: 20}} 
     onPress={ () => { navigation.goBack() }} />,
      title: 'NewzGeekz', });

    
  
      constructor(props) {
        super(props);
    
        this.state = {
          isLoading: true,
          data: null,
          
        }
      }  

     
      UNSAFE_componentWillMount() {
        const catagory = this.props.navigation.getParam("catagory", null);
        // const  catagory = this.state.catagory
        getArticles(catagory).then(data => {
          this.setState({
            isLoading: false,
            data: data
          });
          
        }, error => {
          Alert.alert('Error', 'Something went wrong!');
        }
        )
      }

      

    
  
  render() {
    
    let view = this.state.isLoading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
          <Text style={{marginTop: 10}} children="Please Wait.." />
        </View>
      ): (
        <List
          dataArray={this.state.data}
          renderRow={(item) => {              
              return (

                 
           <TouchableOpacity activeOpacity={0.7}
                    
                    onPress={() => {
                     this.props.navigation.navigate("ViewScreen",{url: item.url}); 
                    }}
                      >
                   <Card  >
  
                     <CardItem >
                      <Left>
        
                        <Body>
                          <Text numberOfLines={2}>{item.title}</Text>
 
                        </Body>
                        </Left>
                  </CardItem>
                     <CardItem cardBody>
                      <Image source={{ uri: item.urlToImage != null ? item.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }}
                        style={{height: 200, width: null, flex: 1}}/>
                   </CardItem>
                     <CardItem>
                    <Left >
                        <Text style={{fontSize:12}} note>{item.source.name}</Text>
                    </Left>

                    <Right  >
                        <TimeAgo  time={item.publishedAt}/>
                    </Right>
                  </CardItem>
                   </Card>
            </TouchableOpacity>
                  )
          }}
          keyExtractor={(item, index) => index.toString()} />
      )


    return (  
       
        <SafeAreaView>
     
          {view}
        </SafeAreaView>
      
     
    
      );
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowOffset:{height: 2},
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.2,
   
    
  },

})
  

