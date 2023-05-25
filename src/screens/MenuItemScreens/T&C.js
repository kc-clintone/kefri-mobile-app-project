import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Terms() {
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
					Terms and conditions
				</Text>
			</View>
			<View style={styles.content}>
				<Text style={{ fontSize: 20, fontWeight: '600', marginVertical: 3 }}>
					Terms of use.
				</Text>
				<Text style={{ fontSize: 15, fontWeight: '100' }}>
					Preloads pages that Chrome thinks you might visit. To do this, Chrome
					may use cookies, if you allow cookies, and may encrypt and send pages
					through Google to hide your identity from sites. If you allow cookies,
					and may encrypt and send pages through Google to hide your identity
					from sites. Allow cookies, and may encrypt and send pages through
					Google to hide your identity from sites.
				</Text>

				<Text style={{ fontSize: 20, fontWeight: '600', marginTop: 30 }}>
					Conditions
				</Text>
				<Text style={{ fontSize: 15, fontWeight: '300', marginTop: 3 }}>
					Preloads pages that Chrome thinks you might visit. To do this, Chrome
					may use cookies, if you allow cookies, and may encrypt and send pages
					through.
				</Text>
				<Text style={{ fontSize: 15, fontWeight: '300', marginTop: 20 }}>
					Preloads pages that Chrome thinks you might visit. To do this, Chrome
					may use cookies, if you allow cookies, and may encrypt and send pages
					through.
				</Text>
				<Text style={{ fontSize: 15, fontWeight: '300', marginTop: 20 }}>
					Preloads pages that Chrome thinks you might visit. To do this, Chrome
					may use cookies, if you allow cookies, and may encrypt and send pages
					through.
				</Text>
				<Text style={{ fontSize: 15, fontWeight: '300', marginTop: 20 }}>
					Preloads pages that Chrome thinks you might visit. To do this, Chrome
					may use cookies, if you allow cookies, and may encrypt and send pages
					through.
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		width: '95%',
		alignSelf: 'center',
		marginTop: 90,
	},
});
