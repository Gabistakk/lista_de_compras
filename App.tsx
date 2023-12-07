import { config } from '@gluestack-ui/config';
import { Button, ButtonIcon, ButtonText, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { View } from 'react-native'
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <View>
      <Home />
      </View>
    </GluestackUIProvider>
  );
}



