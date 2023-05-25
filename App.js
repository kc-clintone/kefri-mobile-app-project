import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/navigation';
import 'expo-dev-client';
import Amplify from 'aws-amplify';
import awsmobile from './src/aws-exports';

Amplify.configure(awsmobile);

export default function App() {
	return (
		<NavigationContainer>
			<RootNavigation />
		</NavigationContainer>
	);
}
