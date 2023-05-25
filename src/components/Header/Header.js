import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
	const navigation = useNavigation();
	return (
		<View style={styles.headerView}>
			<Text style={styles.heading}>Home</Text>

			<TouchableOpacity
				style={styles.postBtn}
				onPress={() => navigation.navigate('Post')}
			>
				{
					<AntDesign
						name='plus'
						style={{
							fontSize: 22,
							fontWeight: 'bold',
							marginRight: 10,
							color: 'white',
						}}
					/>
				}
				<Text style={styles.postText}>Post</Text>
			</TouchableOpacity>
		</View>
	);
}

// stylesheet
const styles = StyleSheet.create({
	headerView: {
		marginVertical: 15,
		alignSelf: 'center',
		width: '90%',
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	heading: {
		fontSize: 28,
		fontWeight: 'normal',
		marginLeft: 10,
	},
	postBtn: {
		backgroundColor: 'blue',
		paddingVertical: 8,
		paddingHorizontal: 18,
		borderRadius: 9,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	postText: {
		color: 'white',
		fontSize: 17,
		fontWeight: '500',
	},
});
