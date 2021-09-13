import React from 'react'
import Profiler from '../views/User'
import Add from '../views/Add'
import Change from '../views/Change'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient'
import { View } from 'react-native'
import layout from '../design/layout'

const Tab = createBottomTabNavigator()
export default  (props) =>{
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={Add}
            screenOptions={({route}) =>({
                //Estilo Dos Tabs

                tabBarActiveTintColor:'#9C27B0',
                tabBarinactiveTintColor:'#777', 
                showLabel:false,
                headerShown:false,

                //Icones
                tabBarIcon:({color,size}) =>{
                    let icoName

                    switch (route.name) {
                        case 'Home':
                            icoName = 'home'
                            break;
                        case 'Change':
                            icoName = 'edit'
                            break;
                        case 'Profiler':
                            icoName = 'user' 
                            break;   
                    }
                    //Renderiza Os Icones
                    return <Icon name={icoName} size={size} color={color}/>;
                }
            })}
            >
                <Tab.Screen name='Home' component={Profiler}/>
                <Tab.Screen name='Add' component= {Add}
                options={ () => ({
                    tabBarIcon:({tintColor}) => (
                        <View>
                            <LinearGradient style={layout.AddIcon} start={{ x: 0, y: 1 }} end={{x:0,y:0}} colors={['#D500F9', '#4A148C']}>
                                <Icon name='plus' size={26} color= '#FFF'/>
                            </LinearGradient>
                        </View>    
                    ),
                }) }
                />
                <Tab.Screen name='Change' component={Change}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}