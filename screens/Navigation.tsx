import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {HomeScreen} from "./HomeScreen";
import DetailedArticleScreen from "./DetailedArticleScreen";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator()

export const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: "Article"}}/>
                <Stack.Screen name="Detailed" component={DetailedArticleScreen} options={{title: "DetailedArticle"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}