import React, { useState } from 'react';
import { Button, View,Text,TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen=({ navigation }) =>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{width:250,height:250}}source={{uri:"https://media.tenor.com/KPk68skoh7IAAAAC/siamese-cat-siamese.gif"}}/>
      <Text style={{fontSize:40,marginBottom:40}}>Bienvenido!</Text>
      <Button
        title="Ir al contador"
        onPress={() => navigation.navigate('ClickScreen')}
      />
    </View>
  );
}

const ClickScreen=()=> {
  const [count,setCount]=useState(0);
  const onPress=()=>setCount(count=>count+1)
  const onPress2=()=>setCount(prevCount=>prevCount-1)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffe9d8' }}>
      <Image style={{width:250,height:250}}source={{uri:"https://media.tenor.com/sCsJ0l1gxHUAAAAd/cat-meme.gif"}}/>
      <Text style={{fontSize:40}}>Clicks!:{count}</Text>
      <TouchableOpacity onPress={onPress} style={{backgroundColor:'#e7e7e7',width:'70%',alignItems: 'center', justifyContent: 'center',padding:10,borderRadius:20,marginBottom:20,marginTop:20}}>
        <Text style={{fontSize:20}}>Contador+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress2} style={{backgroundColor:'#e7e7e7',width:'70%',alignItems: 'center', justifyContent: 'center',padding:10,borderRadius:20}}>
        <Text style={{fontSize:20}}>Contador-</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

const MyStack=()=> {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="ClickScreen" component={ClickScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack
