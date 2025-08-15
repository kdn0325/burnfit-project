import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  LibraryScreen,
  MyPageScreen,
  CalendarScreen,
  HomeScreen,
} from '../screens';
import Lucide from '@react-native-vector-icons/lucide';

type RouteName = 'Home' | 'Calendar' | 'Library' | 'MyPage';
type IconName = 'house' | 'calendar' | 'book-open' | 'user';

const Tab = createBottomTabNavigator();

const icons: Record<RouteName, IconName> = {
  Home: 'house',
  Calendar: 'calendar',
  Library: 'book-open',
  MyPage: 'user',
};

const getTabBarIcon = (routeName: RouteName, color: string, size: number) => {
  return <Lucide name={icons[routeName]} size={size} color={color} />;
};
export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) =>
          getTabBarIcon(route.name as RouteName, color, size),
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="MyPage" component={MyPageScreen} />
    </Tab.Navigator>
  );
}
