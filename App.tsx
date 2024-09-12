import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the parameter list for your stack navigator
type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Notifications: undefined;
  Settings: undefined;
};

// Define the type for the navigation prop in each screen
type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
};

function HomeScreen({ navigation }: ScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }: ScreenProps<'Profile'>) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function NotificationsScreen({ navigation }: ScreenProps<'Notifications'>) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }: ScreenProps<'Settings'>) {
  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#fefefe',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'This App - Home',
        }} 
      />
      <Stack.Screen 
        name="Notifications" 
        component={NotificationsScreen} 
        options={{
          title: 'This App - Notifications',
        }}
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          title: 'This App - Profile',
        }}
      />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          title: 'This App - Settings',
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
