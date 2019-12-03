import Choose from './choose'
import Result from './result'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const app=createStackNavigator({
    choose:{
        screen:Choose,
        navigationOptions:{
            headerShown:false
        }
    },
    result:{
        screen:Result,
        navigationOptions:{
           headerShown:false
        }
    }
},{initialRouteName:'choose'})

export default createAppContainer(app)