import { View, StyleSheet } from 'react-native';
import Reports from '../../components/Reports/ReportList';

export default function Home() {
	return (
		<View style={styles.mainView}>
			<View>
				<Reports />
			</View>
		</View>
	);
}

// ====styles====
const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		backgroundColor: '#fefefe',
	},
});
