
import React, { Component } from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class App extends Component {
    state = {  }
    render() { 
        return (
            <View style={{flex:1,width:"100%",backgroundColor:"#9b59b6",justifyContent:"center",alignItems:"center"}}>
                <Text style={{width:"100%",marginTop:20,paddingVertical:20,fontSize:24,textAlign:"center",color:"#fff"}}>We predicted</Text>
                <ScrollView contentContainerStyle={{padding:20,width:300,height:450,backgroundColor:"#fff",borderRadius:5}}>
                    <Image style={{width:"100%",height:300,backgroundColor:"#333"}} />
                    <View style={{paddingTop:10}}>
                        <Text style={{textAlign:"center",fontSize:20,color:"#333"}}>asdasdas</Text>
                        <Text style={{textAlign:"center",fontSize:20,color:"#333"}}>asdasdas</Text>
                        <Text style={{textAlign:"center",fontSize:20,color:"#333"}}>asdasdas</Text>
                    </View>
                </ScrollView>
                <Text onPress={()=>this.props.navigation.navigate("choose")} style={{width:"100%",fontSize:24,marginBottom:40,textAlign:"center",color:"#f1c40f"}}> {"< Back"}</Text>

            </View>
          );
    }
}