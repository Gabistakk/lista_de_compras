import { config } from '@gluestack-ui/config';
import { Button, ButtonIcon, ButtonText, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { View } from 'react-native'
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <GluestackUIProvider config={config}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Lista De Compras" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      </GluestackUIProvider>
  );
}



