import React, { Component } from 'react';
import {View,Text,ImageBackground,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
export default class App extends Component {
    state = { image:null }
    getPermissionAsync = async () => {
        
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to get the picture');
          }
        }
      }

      openImage =async ()=>{
          let body=new FormData()
          this.getPermissionAsync();
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 4],
            }); 
         
            if (!result.cancelled) {
                let file = /^.*\/(.*)\.(.*)$/g.exec(result.uri);
                this.setState({image:{uri:result.uri}})
                body.append('my_file',{
                    uri: result.uri,
                    type: "image/*",
                    name: file[1]+"."+file[2] 
                })
                }

          }

    render() { 
        return (
            <View style={{flex:1,width:"100%",backgroundColor:"#e74c3c",justifyContent:"center",alignItems:"center"}}>
                <Text style={{width:"100%",paddingVertical:20,fontSize:24,textAlign:"center",color:"#fff"}}>Choose A Photo</Text>
                <TouchableOpacity onPress={()=>this.openImage()}>
                    <View style={{padding:10,borderWidth:2,borderColor:"#fff",borderStyle:"dashed",borderRadius:10,alignItems:"center",justifyContent:"center"}}>
                        <ImageBackground source={this.state.image} style={{width:200,height:200,alignItems:"center",justifyContent:"center"}}>
                            <Icon name="plus-circle" size={50} color="#fff"/>
                        </ImageBackground>
                    </View>
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