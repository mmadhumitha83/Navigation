import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Exit = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text><b>ByeeeeeZZ!!!</b></Text><br></br>
      <Button title='click me' color="red" onPress={() => navigation.navigate("Profile")}></Button>
    </View>
  )
}

export default Exit


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });