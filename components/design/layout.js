import { StyleSheet } from "react-native"
export default StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        ContainerModal:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        },
        modal: {
          flex:1,
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 100,
          borderRadius:10,
        },
        Cad:{
          backgroundColor:'rgb(242, 242, 242)',
          opacity:0.8,
          borderRadius:10,
          padding:30,
          marginBottom:10
        },
        cadFormTitle:{
          fontWeight:'500',
          fontSize:20,
          textAlign:'center',
          justifyContent:'center'
        },
        cadForm:{
          fontWeight:'500', 
          fontSize:20,
          marginBottom:10
        },
        input:{
          backgroundColor:'#FFF',
          borderRadius:10,
          width:250
        },
        border:{
          backgroundColor:'#f2f2f2',
          borderRadius:20,
          borderWidth:2,
        },
        AddIcon:{
          width: 60,
          height: 60,
          borderRadius: 30,
          marginBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 6,
          shadowColor: '#9C27B0',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        }
})