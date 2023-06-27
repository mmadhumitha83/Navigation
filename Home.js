import { StyleSheet, Text, View,Image,Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text><b>Image 2</b></Text>
            <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCXISA7AWonO3J24GKCgtJ9e4OTuaJHSBM7rcN3j28GfR6eJAJTe1Gi_AlJpG6wuFnCs&usqp=CAU'}}
   style={{ width: 200, height: 200 }}
   />
    <Button title='click me' color="green" onPress={() => navigation.navigate("Exit")}></Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
