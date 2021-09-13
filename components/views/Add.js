import React, {useState} from 'react'
import {View,Text,Modal, Button, TextInput, ScrollView, Alert} from 'react-native'
import layout from '../design/layout'
export default  () =>{
    let [modal, IsVisible] = useState(false)
    function InsertFunc () {

        fetch('../../conection/insert.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  
          nome : this.TextInput_Name,

          cpf : this.TextInput_CPF,
  
          salario :this.TextInput_Salario,
  
          funcao : this.TextInput_funcao,
  
          horas_mensais : this.TextInput_horas_mensais,

          vinculo : this.TextInput_vinculo,
  
            
        })
  
        }).then((response) => response.json())
            .then((responseJson) => {
  
              
              Alert.alert(responseJson);
  
            }).catch((error) => {
              console.error(error);
            });
    }    
  
    return(
        <View style={layout.containerModal}>
            <Modal
            animationType='slide'
            transparent={true}
            visible = {true}
            >
            <ScrollView>
                <Text style={layout.cadFormTitle}> Insira os dados aqui do seu funcionario </Text>
                <View style={layout.modal}>

                    <View style={layout.Cad}>
                        <Text style={layout.cadForm}>Nome:</Text>
                        <TextInput style={layout.input} 
                        onChangeText={TextInputValue => ({ TextInput_Name : TextInputValue }) }
                        />
                    </View>

                    <View style={layout.Cad}>
                        <Text style={layout.cadForm}>CPF:</Text>
                        <TextInput  style={layout.input}
                        onChangeText={TextInputValue =>({ TextInput_CPF : TextInputValue }) }
                        />
                    </View>

                    <View style={layout.Cad}>
                        <Text style={layout.cadForm}>Salario:</Text>
                        <TextInput  style={layout.input} 
                        onChangeText={TextInputValue => ({ TextInput_Salario : TextInputValue }) }
                        />
                    </View>

                    <View style={layout.Cad}>
                        <Text style={layout.cadForm}>funcao</Text>
                        <TextInput  style={layout.input}
                        onChangeText={TextInputValue => ({ TextInput_funcao : TextInputValue }) }
                        />
                    </View>

                    <View style={layout.Cad}>
                        <Text style={layout.cadForm}>horas_mensais:</Text>
                        <TextInput  style={layout.input}
                        onChangeText={TextInputValue => ({ TextInput_horas_mensais : TextInputValue }) }
                        />
                    </View>

                    <View style={layout.Cad}>
                        <Text style={layout.cadForm}>vinculo:</Text>
                        <TextInput  style={layout.input}
                        onChangeText={TextInputValue => ({ TextInput_vinculo : TextInputValue }) }
                        />
                    </View>

                    <Button title='Cadastrar' onPress={() => {
                        InsertFunc()
                    } } />

                    <Button title='sair' onPress={() =>{
                        IsVisible = (!modal)}}/>

                    <Text>Ola</Text>
                </View>
            </ScrollView>                
            </Modal>
        </View>
    )
}
