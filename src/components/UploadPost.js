import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Image,
	Alert,
} from 'react-native';
import React, { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

export default function UploadPost() {
	// navigation component
	const navigation = useNavigation();

	// state of the image
	const [image, setImage] = useState(null);

	// if cancelled
	const handleCancel = () => {
		alert('Do you want to cancel this post?', {
			yes: 'yes',
		});
		// Alert.alert(console.log('cancelled'));
	};

	// picking the image from local storage
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	return (
		<View style={styles.mainView}>
			<View>
				<View style={{ width: '95%', alignSelf: 'center', marginVertical: 15 }}>
					<Text
						style={{
							color: 'black',
							fontSize: 20,
							marginBottom: 3,
							fontWeight: '600',
						}}
					>
						To make a post,
					</Text>
					<Text style={{ color: 'grey', fontSize: 15, fontWeight: '100' }}>
						Please select an image from your gallery, then proceed to filling
						the form below by providing the name of the plant affected and
						lastly give a short description of what's going on
					</Text>
				</View>
				{image ? (
					<View>
						<Image source={{ uri: image }} style={styles.pickedImage} />
					</View>
				) : (
					<TouchableOpacity style={styles.imageUpload} onPress={pickImage}>
						<View style={styles.uploadWrap}>
							<EvilIcons name='image' style={styles.uploadIcon} />
							<Text
								style={{
									color: 'grey',
									textAlign: 'center',
									fontSize: 18,
									top: -3,
								}}
							>
								Click to upload an image
							</Text>
						</View>
					</TouchableOpacity>
				)}
				<View style={styles.formWrap}>
					<Formik
						initialValues={{
							species: '',
							description: '',
						}}
						onSubmit={(values) => console.log(values)}
					>
						{({ handleChange, handleBlur, handleSubmit, values }) => (
							<View>
								<Text
									style={{
										fontSize: 23,
										fontWeight: 'bold',
										marginVertical: 8,
									}}
								>
									Name(species) of plant.
								</Text>
								<TextInput
									onChangeText={handleChange('species')}
									onBlur={handleBlur('species')}
									value={values.species}
									style={styles.textInput}
								/>
								<Text
									style={{
										fontSize: 23,
										fontWeight: 'bold',
										marginTop: 30,
										marginBottom: 10,
									}}
								>
									Describe the issue.
								</Text>
								<TextInput
									onChangeText={handleChange('description')}
									onBlur={handleBlur('description')}
									value={values.description}
									style={styles.textArea}
								/>

								<View style={styles.uploadBtn}>
									<Text onPress={handleSubmit} style={styles.submitBtn}>
										Report
									</Text>
									<Text style={styles.cancelBtn} onPress={() => handleCancel()}>
										Cancel
									</Text>
								</View>
							</View>
						)}
					</Formik>
				</View>
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
	},
	imageUpload: {
		marginTop: 7,
		width: '94%',
		height: 200,
		backgroundColor: '#a1caff',
		alignSelf: 'center',
		borderColor: 'grey',
		borderWidth: 2,
		borderStyle: 'dashed',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	uploadWrap: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	uploadIcon: {
		fontSize: 100,
		color: '#111',
	},
	formWrap: {
		width: '85%',
		alignSelf: 'center',
		marginTop: 20,
	},
	textInput: {
		width: '100%',
		height: 50,
		borderRadius: 7,
		borderStyle: 'solid',
		borderColor: 'lightblue',
		borderWidth: 1,
	},
	textArea: {
		width: '100%',
		height: 130,
		borderRadius: 7,
		borderStyle: 'solid',
		borderColor: 'lightblue',
		borderWidth: 1,
		display: 'flex',
		justifyContent: 'flex-start',
	},
	uploadBtn: {
		marginVertical: 15,
		width: '85%',
		alignSelf: 'center',
		flexDirection: 'row-reverse',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	submitBtn: {
		backgroundColor: 'blue',
		borderRadius: 6,
		paddingVertical: 12,
		paddingHorizontal: 23,
		color: '#fff',
		fontSize: 17,
	},
	cancelBtn: {
		borderStyle: 'solid',
		borderColor: 'lightblue',
		borderWidth: 1,
		borderRadius: 6,
		paddingVertical: 12,
		paddingHorizontal: 23,
		color: '#111',
		fontSize: 17,
	},
	pickedImage: {
		marginTop: 7,
		width: '94%',
		height: 200,
		alignSelf: 'center',
		borderRadius: 8,
	},
});
