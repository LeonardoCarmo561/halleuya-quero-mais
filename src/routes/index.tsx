import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home";


const { Navigator, Screen } = createStackNavigator();

function Router() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
    }}>
      <Screen name="home" component={Home} />
    </Navigator>
  )
}

export default Router
