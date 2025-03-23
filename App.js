import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let [fontLoaded] = useFonts({
    Inter_700Bold,
  });

  // If fonts are not loaded, show loading screen
  if (!fontLoaded) {
    return <Text>Loading Fonts...</Text>;
  }

  const handleLogin = () => {
    // Handle login logic here (e.g., API call)
    console.log("Logging in with:", email, password);
  };

  return (
  
        <ImageBackground source={require('./assets/light-bg.png')} style={{flex: 1}}>
          <View style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingHorizontal: 26,
            marginTop: 45
            
          }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                <Text style={{
                  fontSize: 18,
                  color: "white",
                  fontFamily: 'Inter-Regular'
                }}>
                The only way to do great work is to love what you do.
                </Text>

                <Text style={{color:'white',fontFamily: 'Inter-Bold',marginTop: 8}}>-Steve Jobs</Text>
              </View>
              <Image source={require('./assets/refresh.png')}></Image>

            </View>
            
          </View>

        </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  
});
