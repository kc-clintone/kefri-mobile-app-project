import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { urlFor } from '../../../utils/client';
import { useNavigation } from '@react-navigation/native';

export default function Report({ postData }) {
	const navigation = useNavigation();

	return (
		<View style={styles.reportContainer}>
			<View key={postData._id}>
				<View style={styles.Title}>
					<Image
						source={{ uri: urlFor(postData.reportedBy.image).url() }}
						alt='alt'
						style={styles.imageStyle}
					/>

					<View style={styles.userdetails}>
						<Text style={styles.userName}>{postData?.reportedBy.userName}</Text>
						<View style={{ flexDirection: 'row' }}>
							<Text style={styles.UserCounty}>
								{postData.reportedBy.location} county
							</Text>
							<Text style={styles.timePosted}>{postData?._createdAt}</Text>
						</View>
					</View>
				</View>

				<TouchableOpacity
					style={styles.post}
					onPress={() =>
						navigation.navigate('Report Details', {
							id: postData?._id,
						})
					}
				>
					<Image
						source={{ uri: postData?.photo.asset.url }}
						alt='alt'
						style={styles.postImg}
					/>

					<Text style={styles.postDescription} numberOfLines={3}>
						{postData?.description}
					</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.divider}></View>
		</View>
	);
}

// stylesheet
const styles = StyleSheet.create({
	reportContainer: {
		flex: 1,
		width: '95%',
		alignSelf: 'center',
	},
	divider: {
		width: '100%',
		height: 1,
		backgroundColor: 'lightblue',
	},
	Title: {
		width: '100%',
		padding: 5,
		alignSelf: 'center',
		flexDirection: 'row',
	},
	imageStyle: {
		width: 55,
		height: 55,
		borderRadius: 50,
		backgroundColor: 'lightblue',
	},
	userdetails: {
		marginLeft: 15,
	},
	userName: {
		fontSize: 21,
		fontWeight: 'bold',
		marginVertical: 2,
	},
	UserCounty: {
		fontSize: 17,
		fontWeight: '100',
		color: 'gray',
		marginRight: 10,
		textTransform: 'lowercase',
	},
	post: {
		width: '100%',
		marginVertical: 10,
		alignSelf: 'center',
		borderWidth: 1,
		borderColor: 'lightblue',
		borderRadius: 15,
	},
	postImg: {
		width: '100%',
		height: 200,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		marginBottom: 2,
	},
	postDescription: {
		fontSize: 15,
		margin: 8,
	},
	timePosted: {
		marginLeft: 10,
	},
});
