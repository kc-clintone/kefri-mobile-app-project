import { View, StyleSheet } from 'react-native';
import React from 'react';
import UploadPost from '../../components/UploadPost';

export default function UploadScreen() {
	return (
		<View style={styles.mainView}>
			<UploadPost />
		</View>
	);
}

// styles
const styles = StyleSheet.create({
	mainView: {
		marginTop: 10,
		flex: 1,
	},
});
