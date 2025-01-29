import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import Detail from './pages/detail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={Home} options={  { title: 'Posts' }}/>
        <Stack.Screen name="Detail" component={Detail} options={{ title: 'Post Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}