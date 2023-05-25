import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
	const navigation = useNavigation();

	return (
		<View>
			<View
				style={{
					position: 'absolute',
					top: 15,
					left: 15,
					flexDirection: 'row',
					alignItems: 'center',
					marginVertical: 10,
				}}
			>
				<Ionicons
					name='chevron-back-outline'
					style={{
						fontSize: 30,
						color: 'black',
					}}
					onPress={() => navigation.goBack()}
				/>
				<Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 10 }}>
					Settings
				</Text>
			</View>

			<View style={styles.container}>
				<TouchableOpacity style={styles.itemContainer}>
					<Text style={styles.item}>Security</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.itemContainer}>
					<Text style={styles.item}>Change theme</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.itemContainer}>
					<Text style={styles.item}>Region & Language</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.itemContainer}>
					<Text style={styles.item}>About app</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.itemContainer}>
					<Text style={styles.item}>Privacy policy</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.itemContainer}>
					<Text style={styles.item}>Permissions</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.itemContainer}>
					<Text style={styles.item}>Rate our application</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 100,
	},
	item: {
		paddingVertical: 8,
		marginHorizontal: 15,
		fontSize: 19,
		fontWeight: '300',
		borderBottomWidth: 1,
	},
	itemContainer: {
		borderBottomColor: 'black',
		marginVertical: 14,
	},
});
