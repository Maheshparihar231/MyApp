import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './routs/home';
import Detail from './routs/detail';
import Moredetail from './routs/moredetail';
import Alljobs from './routs/jobpage';
import Allcourse from './routs/coursepage';

const Stack = createStackNavigator();
export default function App() {
    return (
     <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name='home' component={Home}/> */}
          <Stack.Screen name='Detail' component={Detail}/>
          <Stack.Screen name='moredetail' component={Moredetail}/>
          <Stack.Screen name='All Jobs' component={Alljobs}/>
          <Stack.Screen name='All course' component={Allcourse}/>
        </Stack.Navigator>
     </NavigationContainer>
    )
}
// "@react-navigation/drawer": "^6.5.7",