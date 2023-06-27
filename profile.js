import { StyleSheet, Text, View,Image,Button } from 'react-native'
import React from 'react'

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, color:'red'}}><b> Image 1</b></Text>
            <Image source = {{uri:'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}}
   style={{ width: 200, height: 200, paddingVertical:12}}
   />
    <Button style={styles.but} title='click me' color="blue"  onPress={() => navigation.navigate("Home")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'serif',
        fontSize:40,
        position:'relative',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:"flex-start",
        
        
      },
      but:{
        paddingHorizontal:52,
        paddingVertical:32,
      },
});