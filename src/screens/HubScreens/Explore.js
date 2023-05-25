import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

// links

const links = [
	{
		linkItem: 'Agro-forestry',
		icon: 'search',
	},
	{
		linkItem: 'Crop diseases',
		icon: 'search',
	},
	{
		linkItem: 'Small farm business',
		icon: 'search',
	},
	{
		linkItem: 'Tree planting',
		icon: 'search',
	},
	{
		linkItem: 'Global warming',
		icon: 'search',
	},
	{
		linkItem: 'Seed foundations',
		icon: 'search',
	},
];

export default function Explore() {
	return (
		<View style={styles.mainView}>
			<View style={styles.heroContainer}>
				<View
					style={{
						width: '90%',
						alignSelf: 'center',
						marginVertical: 17,
						justifyContent: 'space-between',
						flexDirection: 'row',
					}}
				>
					<View>
						<Text style={styles.heroText}>Search</Text>
						<Text style={styles.heroText}>Explore</Text>
						<Text style={styles.heroText}>Discover</Text>
						<Text style={styles.heroText}>Learn and More...</Text>
					</View>
					<Ionicons name='search' style={styles.heroIcon} />
				</View>
			</View>

			<View style={styles.cardContainer}>
				<TouchableOpacity style={styles.card}>
					<View style={styles.cardItem}>
						<Ionicons name='alarm' size={40} color='black' />
						<Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>
							Farm tips
						</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={styles.card}>
					<View style={styles.cardItem}>
						<Ionicons name='alarm' size={40} color='black' />
						<Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>
							Local news
						</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={styles.card}>
					<View style={styles.cardItem}>
						<Ionicons name='alarm' size={40} color='black' />
						<Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>
							AgroBizz
						</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={styles.card}>
					<View style={styles.cardItem}>
						<Ionicons name='alarm' size={40} color='black' />
						<Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>
							KEFRI Site
						</Text>
					</View>
				</TouchableOpacity>
			</View>

			<View style={{ width: '95%', alignSelf: 'center' }}>
				<Text style={{ fontSize: 16, fontWeight: '600', marginVertical: 10 }}>
					Other useful links
				</Text>

				<ScrollView showsHorizontalScrollIndicator={false}>
					<View style={{ flexDirection: 'row' }}>
						{links.map((link, index) => (
							<View key={index} style={styles.usefulLinkStyle}>
								<Text
									style={{
										fontSize: 15,
										fontWeight: '500',
										color: 'white',
										marginVertical: 4,
									}}
								>
									{link.linkItem}
								</Text>
								<Ionicons name={link.icon} style={styles.usefulIcon} />
							</View>
						))}
					</View>
				</ScrollView>
			</View>
		</View>
	);
}

// styles
const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		backgroundColor: '#f3f3f3',
	},
	cardContainer: {
		width: '100%',
		marginTop: -40,
		alignSelf: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
	},
	heroContainer: {
		height: 270,
		width: '100%',
		backgroundColor: 'rgb(30, 63, 82)',
		borderBottomRightRadius: 18,
		borderBottomLeftRadius: 18,
	},
	card: {
		width: 155,
		height: 155,
		margin: 5,
		alignItems: 'center',
		borderRadius: 15,
		backgroundColor: 'white',
		elevation: 10,
	},
	cardItem: {
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(9, 199, 183, 0.87)',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 15,
	},
	heroText: {
		fontSize: 32,
		fontWeight: '800',
		color: '#fff',
	},
	heroIcon: {
		fontSize: 27,
		color: '#fff',
	},
	usefulIcon: {
		fontSize: 30,
		color: 'rgba(9, 199, 183, 0.87)',
	},
	usefulLinkStyle: {
		width: 145,
		height: 80,
		backgroundColor: 'rgb(30, 63, 82)',
		marginRight: 8,
		marginVertical: 6,
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
