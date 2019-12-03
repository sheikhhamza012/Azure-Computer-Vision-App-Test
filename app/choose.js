import React, { Component } from 'react';
import {View,Text,ImageBackground,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class App extends Component {
    state = {  }
    render() { 
        return (
            <View style={{flex:1,width:"100%",backgroundColor:"#e74c3c",justifyContent:"center",alignItems:"center"}}>
                <Text style={{width:"100%",paddingVertical:20,fontSize:24,textAlign:"center",color:"#fff"}}>Choose A Photo</Text>
                <TouchableOpacity>
                    <ImageBackground style={{width:200,height:200,borderWidth:2,borderColor:"#fff",borderStyle:"dashed",borderRadius:10,alignItems:"center",justifyContent:"center"}}>
                        <Icon name="plus-circle" size={50} color="#fff"/>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("result")} style={{marginTop:20}}>
                    <View style={{width:200,backgroundColor:"#f1c40f",height:50,alignItems:"center",justifyContent:"center",borderRadius:5}}>
                        <Text style={{fontSize:24,color:"#fff"}}>
                            Predict
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
          );
    }
}