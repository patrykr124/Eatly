import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import '../global.css';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import { store } from '../store';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  const Stack = createNativeStackNavigator();


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }



  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name="Restaurant" options={{ headerShown: false }} component={RestaurantScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>


  );
}
