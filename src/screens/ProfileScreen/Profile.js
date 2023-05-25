import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MenuItems from './MenuItems';
import { Auth } from 'aws-amplify';
import CustomButton from '../../components/CustomButton';

export default function Profile() {
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

	// checking if the user exist
	useEffect(() => {
		checkUser();
	}, []);

	// signOut
	const signOutHandler = async () => {
		// Alert.alert('sign out?');
		await Auth.signOut();
	};

	// navigation router
	const navigation = useNavigation();
	return (
		<View style={styles.mainView}>
			<View style={{ position: 'absolute', top: 25, left: 15 }}>
				<Feather
					name='x'
					style={{
						fontSize: 30,
						color: 'black',
					}}
					onPress={() => navigation.goBack()}
				/>
			</View>

			{user ? (
				<View style={styles.userDetails}>
					<View style={styles.profileDetails}>
						<View>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									marginBottom: 20,
								}}
							>
								<Text
									style={{
										fontSize: 18,
										fontWeight: '100',
										color: 'white',
									}}
								>
									Signed in as:
								</Text>
								<Text style={{ color: 'white', marginLeft: 8, fontSize: 15 }}>
									({user.attributes.preferred_username})
								</Text>
							</View>
							<Text style={styles.userName}>{user.attributes.name}</Text>
							<Text style={styles.userEmail}>{user.attributes.email}</Text>
						</View>

						<TouchableOpacity style={styles.editBtn}>
							<AntDesign
								name='form'
								style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}
							/>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<View
					style={{
						marginTop: 20,
						alignSelf: 'center',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: 100,
					}}
				>
					<Text style={{ fontSize: 17, fontWeight: '300' }}>
						Login to see your profile
					</Text>
				</View>
			)}

			<View style={styles.editSection}>
				<MenuItems />
			</View>
			{user ? (
				<View style={styles.dangerSection}>
					<View style={styles.actionWrapper}>
						<CustomButton text={'SignOut'} onPress={() => signOutHandler()} />
					</View>
				</View>
			) : (
				<></>
			)}
		</View>
	);
}

// stylesheet
const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		alignItems: 'center',
		marginTop: 5,
	},
	userDetails: {
		alignSelf: 'center',
		width: '95%',
		backgroundColor: '#001138',
		marginTop: 80,
		borderRadius: 14,
		padding: 8,
		height: 180,
	},

	editBtn: {
		position: 'absolute',
		top: -2,
		right: 0,
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	profileDetails: {
		width: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: 10,
	},
	userName: {
		fontSize: 35,
		fontWeight: '600',
		marginBottom: 2,
		color: '#c7d9ff',
		marginLeft: 20,
	},
	userEmail: {
		fontSize: 17,
		color: '#8b9dc5',
		marginLeft: 20,
	},
	// edit section
	editSection: {
		width: '96%',
		justifyContent: 'space-around',
		marginTop: 30,
	},
	badgeIconContainer: {
		width: 45,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
	},

	// danger-section
	dangerSection: {
		width: '100%',
		bottom: -30,
	},
	actionWrapper: {
		width: '90%',
		alignSelf: 'center',
	},

	logout: {
		backgroundColor: 'blue',
		borderRadius: 12,
		paddingVertical: 13,
		width: '100%',
		color: '#fff',
		fontSize: 21,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
