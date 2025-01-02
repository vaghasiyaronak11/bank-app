/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../tabscreens/HomeScreen';
import SearchScreen from '../tabscreens/SearchScreen';
import MessageScreen from '../tabscreens/MessageScreen';
import SettingScreen from '../tabscreens/SettingScreen';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#469FEF',
        tabBarStyle: {
          height: 55,
          elevation: 10,
          backgroundColor: "#ffffff",
        },
      }}
    >

      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: '', // Hide default label
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer]}>
              {focused ? (
                <LinearGradient
                  colors={['#469FEF', '#5c75f0', '#6c56f0']}
                  style={styles.gradientBackground}
                >
                  <View style={styles.iconRow}>
                    <Image
                      source={require('../assets/homefocus.png')}
                      style={[styles.icon, focused && styles.activeIcon]}
                    />
                    <Text style={[styles.tabLabel, styles.activeTabLabel]}>
                      Home
                    </Text>
                  </View>
                </LinearGradient>
              ) : (
                <Image
                  source={require('../assets/home.png')}
                  style={[styles.icon, focused && styles.activeIcon]}
                />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer]}>
              {focused ? (
                <LinearGradient
                  colors={['#469FEF', '#5c75f0', '#6c56f0']}
                  style={styles.gradientBackground}
                >
                  <View style={styles.iconRow}>
                    <Image
                      source={require('../assets/search.png')}
                      style={[styles.icon, focused && styles.activeIcon]}
                    />
                    <Text style={[styles.tabLabel, styles.activeTabLabel]}>
                      Search
                    </Text>
                  </View>
                </LinearGradient>
              ) : (
                <Image
                  source={require('../assets/search.png')}
                  style={[styles.icon, focused && styles.activeIcon]}
                />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer]}>
              {focused ? (
                <LinearGradient
                  colors={['#469FEF', '#5c75f0', '#6c56f0']}
                  style={styles.gradientBackground}
                >
                  <View style={styles.iconRow}>
                    <Image
                      source={require('../assets/messagefocus.png')}
                      style={[styles.icon, focused && styles.activeIcon]}
                    />
                    <Text style={[styles.tabLabel, styles.activeTabLabel]}>Message</Text>
                  </View>
                </LinearGradient>
              ) : (
                <Image
                  source={require('../assets/message.png')}
                  style={[styles.icon, focused && styles.activeIcon]}
                />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer]}>
              {focused ? (
                <LinearGradient
                  colors={['#469FEF', '#5c75f0', '#6c56f0']}
                  style={styles.gradientBackground}
                >
                  <View style={styles.iconRow}>
                    <Image
                      source={require('../assets/settingfocus.png')}
                      style={[styles.icon, focused && styles.activeIcon]}
                    />
                    <Text style={[styles.tabLabel, styles.activeTabLabel]}>
                      Setting
                    </Text>
                  </View>
                </LinearGradient>
              ) : (
                <Image
                  source={require('../assets/setting.png')}
                  style={[styles.icon, focused && styles.activeIcon]}
                />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 70,
  },
  gradientBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  activeIcon: {
    tintColor: 'white',
  },
  tabLabel: {
    marginLeft: 8,
    fontSize: 12,
    color: 'black',
  },
  activeTabLabel: {
    color: '#fff',
    fontWeight: "semibold",
  },
});

export default TabNavigation;
