import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { client } from '../../../utils/client';
import { allReportsQuery, postDetailQuery } from '../../../utils/queries';

export default function DetailsContent() {
	// routing
	const routes = useRoute();

	const postId = routes.params?.id;

	// navigation
	const navigation = useNavigation();

	// state of data
	const [details, setDetails] = useState(null);

	// populating the page with data
	useEffect(() => {
		if (postId) {
			async function fetchData() {
				const query = postDetailQuery();

				await client.fetch(query).then(setDetails);
			}

			fetchData();
		}
	}, []);

	return (
		<View>
			<Text>{postId}</Text>
		</View>
	);
}
