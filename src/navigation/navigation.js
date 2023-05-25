import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Auth, Hub } from 'aws-amplify';
import { ActivityIndicator, Text } from 'react-native';

// all screens
import Home from '../screens/HomeScreen/Home';
import Profile from '../screens/ProfileScreen/Profile';
import UploadScreen from '../screens/UploadScreen/UploadScreen';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import PostDetails from '../screens/PostDetailScreen/PostDetails';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Terms from '../screens/MenuItemScreens/T&C';
import Notifications from '../screens/MenuItemScreens/Notifications';
import Settings from '../screens/MenuItemScreens/Settings';
import Explore from '../screens/HubScreens/Explore';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';

const RootNavigation = () => {
	const Stack = createNativeStackNavigator();

	// main
	const [user, setUser] = useState(undefined);

	const checkUser = async () => {
		try {
			const authUser = await Auth.currentAuthenticatedUser({
				bypassCache: true,
			});
			setUser(authUser);
		} catch (e) {
			setUser(null);
		}
	};

	useEffect(() => {
		checkUser();
	}, []);

	useEffect(() => {
		const listener = (data) => {
			if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
				checkUser();
			}
		};

		Hub.listen('auth', listener);
		return () => Hub.remove('auth', listener);
	}, []);

	if (user === undefined) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator color='grey' size='large' />
				<Text>Please wait...</Text>
			</View>
		);
	}

	// rturn component
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerShown: false,
			}}
		>
			{user ? (
				<>
					<Stack.Screen name='HomeScreen' component={DefaultTabs} />
					<Stack.Screen name='Report Details' component={PostDetails} />
					<Stack.Screen name='Post' component={UploadScreen} />
					<Stack.Screen name='Explore' component={Explore} />

					<Stack.Screen name='Profile' component={Profile} />
					<Stack.Screen name='Settings' component={Settings} />
					<Stack.Screen name='Notifications' component={Notifications} />
				</>
			) : (
				<>
					<Stack.Screen name='SignIn' component={SignInScreen} />
					<Stack.Screen name='SignUp' component={SignUpScreen} />
					<Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
					<Stack.Screen
						name='ForgotPassword'
						component={ForgotPasswordScreen}
					/>
					<Stack.Screen name='Terms' component={Terms} />
					<Stack.Screen name='NewPassword' component={NewPasswordScreen} />
				</>
			)}
		</Stack.Navigator>
	);
};

const Tabs = createBottomTabNavigator();

const DefaultTabs = () => {
	const navigation = useNavigation();

	return (
		<Tabs.Navigator
			barStyle={{ backgroundColor: 'white' }}
			screenOptions={{
				headerRight: () => (
					<View>
						<Ionicons
							name='ios-menu'
							style={{ fontSize: 28, color: 'black', marginRight: 15 }}
							onPress={() => navigation.navigate('Profile')}
						/>
					</View>
				),
				tabBarLabelStyle: {
					fontSize: 13,
					fontWeight: 'bold',
				},
			}}
		>
			<Tabs.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name={'ios-home'} color={color} size={26} />
					),
				}}
			/>
			<Tabs.Screen
				name='Post'
				component={UploadScreen}
				options={{
					title: 'Report an issue',
					tabBarIcon: ({ color }) => (
						<AntDesign name={'pluscircleo'} color={color} size={24} />
					),
				}}
			/>
			<Tabs.Screen
				name='Explore'
				component={Explore}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name={'ios-search'} color={color} size={24} />
					),
					tabBarLabel: 'Explore',
				}}
			/>
		</Tabs.Navigator>
	);
};

export default RootNavigation;
