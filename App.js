import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>༼ つ ◕_◕ ༽つ</Text>


        <TouchableOpacity onPress={() => navigation.navigate('About')} 
        style={styles.botao}
        >
          <Text style={styles.texto}>Ir para o Sobre</Text>

        </TouchableOpacity>
      </View>
      
    );
  }

  function AboutScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sobre</Text>

        <TouchableOpacity onPress={() => navigation.goBack('')}>
          <Text>Voltar</Text>
              
        </TouchableOpacity>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();


  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
