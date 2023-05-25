import { View, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Report from './Report';
import { client } from '../../../utils/client';
import { allReportsQuery } from '../../../utils/queries';

export default function Reports() {
	const [info, setInfo] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const query = allReportsQuery();

			await client.fetch(query).then(setInfo);
		}

		fetchData();
	}, []);

	if (!info) {
		return <ActivityIndicator size={30} color='lightblue' />;
	}

	return (
		<View>
			<View style={{ backgroundColor: '#f3f3f3' }}>
				<FlatList
					data={info}
					renderItem={({ item }) => <Report postData={item} />}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	);
}
