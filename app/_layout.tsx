import BasketIcon from '@/components/basket/BasketIcon';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import '../global.css';
import BasketScreen from '../screens/BasketScreen';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import { store } from '../store';
import PreparingScreen from '../screens/PreparingScreen';
import BillingScreen from '../screens/BillingScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [currentScreen, setCurrentScreen] = useState("");
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
      <NavigationContainer onStateChange={(state) => {
        if (state) {
          const screenName = state.routes[state.index]?.name;
          setCurrentScreen(screenName)
        }
      }}>
        <Stack.Navigator>

          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name="Restaurant" options={{ headerShown: false }} component={RestaurantScreen} />
          <Stack.Screen name="Basket" options={{ headerShown: false, presentation: 'modal' }} component={BasketScreen} />
          <Stack.Screen name="Preparing" options={{ headerShown: false, presentation: 'fullScreenModal' }} component={PreparingScreen} />
          <Stack.Screen name="Billing" options={{ headerShown: false, presentation: 'fullScreenModal' }} component={BillingScreen} />
          <Stack.Screen name="Delivery" options={{ headerShown: false, presentation: 'fullScreenModal' }} component={DeliveryScreen} />

        </Stack.Navigator>
        {(currentScreen !== "Basket" &&  currentScreen !== "Preparing" && currentScreen !== "Delivery" && currentScreen !== "Billing") 

         && <BasketIcon />}
      </NavigationContainer>
    </Provider>


  );
}
