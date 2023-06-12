import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import testData from '../../../assets/testData';
import { useNavigation } from '@react-navigation/native';

export default function UploadPost() {
	const navigation = useNavigation();

	return (
		<View style={styles.mainView}>
			<View>
				<View style={styles.Title}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Ionicons
							name='ios-chevron-back-outline'
							style={{ fontSize: 30, marginRight: 10 }}
							onPress={() => navigation.goBack()}
						/>
						<Image
							source={{ uri: testData[5].profileImage }}
							alt='profile_image'
							style={styles.imageStyle}
						/>
					</View>

					<View style={styles.userdetails}>
						<Text style={styles.userName}>{testData[5].username}</Text>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Text style={styles.UserCounty}>
								{testData[5].userCounty} county
							</Text>
							<Text style={styles.timePosted}>2hrs ago</Text>
						</View>
					</View>
				</View>

				<View style={styles.divider}></View>

				<Text style={styles.postDescription}>{testData[5].description}</Text>

				<View style={styles.post}>
					<Image
						source={{ uri: testData[5].profileImage }}
						alt='profile_image'
						style={styles.postImg}
					/>
				</View>
			</View>

			<View style={styles.links}>
				<TouchableOpacity style={styles.link}>
					<Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>
						See more posts like this one
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.link}>
					<Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>
						See feedback
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.link}>
					<Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>
						Visit site
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.link}>
					<Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>
						Make a report
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.link}>
					<Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>
						Farm tips
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.link}>
					<Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>
						News
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

// styles
const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		width: '98%',
		alignSelf: 'center',
		marginTop: 10,
	},
	Title: {
		width: '100%',
		padding: 5,
		alignSelf: 'center',
		flexDirection: 'row',
	},
	imageStyle: {
		width: 50,
		height: 50,
		borderRadius: 50,
		backgroundColor: 'lightblue',
	},
	userdetails: {
		marginLeft: 10,
	},
	userName: {
		fontSize: 22,
		fontWeight: 'bold',
	},
	UserCounty: {
		fontSize: 17,
		fontWeight: '100',
		color: 'gray',
		marginRight: 10,
		textTransform: 'lowercase',
	},
	post: {
		width: '94%',
		marginVertical: 10,
		alignSelf: 'center',
		borderWidth: 1,
		borderColor: 'lightblue',
		borderRadius: 15,
	},
	postImg: {
		width: '100%',
		height: 240,
		borderRadius: 15,
	},
	postDescription: {
		fontSize: 17,
		width: '95%',
		alignSelf: 'center',
		textAlign: 'justify',
		marginVertical: 10,
	},
	timePosted: {
		marginLeft: 10,
	},
	divider: {
		width: '100%',
		height: 1,
		backgroundColor: 'lightblue',
		marginVertical: 5,
		alignSelf: 'center',
	},
	contactBtn: {
		fontSize: 20,
		marginHorizontal: 10,
		color: 'lightblue',
	},

	links: {
		width: '97%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 5,
	},
	usefulLinks: {
		fontSize: 16,
		fontWeight: 'bold',
		marginVertical: 10,
		marginHorizontal: 5,
	},
	link: {
		margin: 8,
		padding: 10,
		borderRadius: 15,
		backgroundColor: 'blue',
	},
});
