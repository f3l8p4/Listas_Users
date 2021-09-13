import React from 'react'
import {View,Text} from 'react-native'
import layout from '../design/layout'
export default (props) =>{
    return(
        <View style={layout.container}>
            <Text style={layout.border}> Ola </Text>
            <Text> Mudanças ocorrerão aqui </Text>
        </View>
    )
}
