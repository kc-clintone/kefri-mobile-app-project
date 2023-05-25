import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Notifications() {
	const navigation = useNavigation();

	return (
		<View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
			<View
				style={{
					position: 'absolute',
					top: 15,
					left: 15,
					flexDirection: 'row',
					alignItems: 'center',
					zIndex: 100,
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
					Notifications
				</Text>
			</View>
			<View style={styles.mainView}>
				<Text
					style={{
						fontSize: 18,
						fontWeight: '700',
					}}
				>
					You have no notifications yet...
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainView: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%',
	},
});
