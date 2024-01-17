import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import { createMaterialBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.MaterialBottomTabNavigator
            screenOption={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                           ? 'book'
                           : 'book-outline';
                    } else if (route.name === 'CreatePost') {
                        return  <Ionicons name={iconName} size={size} color={color}/>
                    }
                }
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name='Feed' component={Feed} />
            <Tab.Screen name='CreatePost' component={CreatePost} />
        </Tab.MaterialBottomTabNavigator>
    );
}

export default BottomTabNavigator