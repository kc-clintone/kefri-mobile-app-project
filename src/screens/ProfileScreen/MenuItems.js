import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MenuItems() {
	const navigation = useNavigation();

	return (
		<>
			<TouchableOpacity
				style={styles.container}
				onPress={() => navigation.navigate('Settings')}
			>
				<View style={styles.editUserDetail}>
					<MaterialIcons
						name='settings'
						style={{
							fontSize: 22,
							color: '#111',
							backgroundColor: 'rgb(194, 194, 194)',
							padding: 6.5,
							marginRight: 10,
							borderRadius: 3,
							alignItems: 'center',
						}}
					/>
					<Text style={styles.containerText}>Settings</Text>
				</View>
				<Ionicons name='chevron-forward-outline' style={styles.chevron} />
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.container}
				onPress={() => navigation.navigate('Notifications')}
			>
				<View style={styles.editUserDetail}>
					<MaterialIcons
						name='chat'
						style={{
							fontSize: 22,
							color: 'rgb(0, 51, 160)',
							backgroundColor: 'rgb(132, 171, 255)',
							padding: 6.5,
							marginRight: 10,
							borderRadius: 3,
							alignItems: 'center',
						}}
					/>
					<Text style={styles.containerText}>Notifications</Text>
				</View>
				<Ionicons name='chevron-forward-outline' style={styles.chevron} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.container}>
				<View style={styles.editUserDetail}>
					<MaterialIcons
						name='mail'
						style={{
							fontSize: 22,
							color: 'rgb(255, 104, 129)',
							backgroundColor: 'rgb(255, 196, 206)',
							padding: 6.5,
							marginRight: 10,
							borderRadius: 3,
							alignItems: 'center',
						}}
					/>
					<Text style={styles.containerText}>Feedback</Text>
				</View>
				<Ionicons name='chevron-forward-outline' style={styles.chevron} />
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.container}
				onPress={() => navigation.navigate('Terms')}
			>
				<View style={styles.editUserDetail}>
					<MaterialIcons
						name='policy'
						style={{
							fontSize: 22,
							color: 'green',
							backgroundColor: 'lightgreen',
							padding: 6.5,
							marginRight: 10,
							borderRadius: 3,
							alignItems: 'center',
						}}
					/>
					<Text style={styles.containerText}>Terms & Conditions</Text>
				</View>
				<Ionicons name='chevron-forward-outline' style={styles.chevron} />
			</TouchableOpacity>
		</>
	);
}

// stylesheet
const styles = StyleSheet.create({
	editUserDetail: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
	},
	container: {
		width: '90%',
		height: 55,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		margin: 5,
		marginVertical: 5,
	},
	containerText: {
		paddingLeft: 6,
		fontSize: 18,
		fontWeight: '100',
		color: 'grey',
		width: '100%',
	},
	chevron: {
		position: 'absolute',
		top: 15,
		right: 0,
		fontSize: 26,
		color: 'black',
	},
});
