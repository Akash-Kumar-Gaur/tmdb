import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScene from "./src/Scenes/HomeScene";

const Tab = createBottomTabNavigator();

const BOTTOM_TABS = [{
  tabName: 'Home',
  icon: 'https://img.icons8.com/fluency-systems-filled/48/home.png',
  component: HomeScene
}, {
  tabName: 'Watchlist',
  icon: 'https://img.icons8.com/glyph-neue/64/1A1A1A/start.png',
  component: HomeScene
}, {
  tabName: 'Search',
  icon: 'https://img.icons8.com/external-febrian-hidayat-glyph-febrian-hidayat/64/1A1A1A/external-search-user-interface-febrian-hidayat-glyph-febrian-hidayat.png',
  component: HomeScene
}, {
  tabName: 'Account',
  icon: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/1A1A1A/external-user-social-media-ui-tanah-basah-glyph-tanah-basah.png',
  component: HomeScene
}]

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle: { backgroundColor: '#09090F', height: 60, borderTopWidth: 0 },
      }}>
        {BOTTOM_TABS.map((tab, key) => {
          const { tabName = '', icon = '', component } = tab;
          return <Tab.Screen name={tabName} key={key} component={component} options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused }) => <Image source={{ uri: icon }} style={{ width: 20, aspectRatio: 1, resizeMode: 'cover', tintColor: focused ? '#fff' : '#51535D' }} />
          }} />
        })}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App