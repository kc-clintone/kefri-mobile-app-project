import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	useWindowDimensions,
	ScrollView,
	TextInput,
	Alert,
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const SignInScreen = () => {
	const { height } = useWindowDimensions();
	const navigation = useNavigation();
	const [loading, setLoading] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSignInPressed = async (data) => {
		if (loading) {
			return;
		}

		setLoading(true);
		try {
			await Auth.signIn(data.username, data.password);
		} catch (e) {
			Alert.alert('Oops', e.message);
		}
		setLoading(false);
	};

	const onForgotPasswordPressed = () => {
		navigation.navigate('ForgotPassword');
	};

	const onSignUpPress = () => {
		navigation.navigate('SignUp');
	};

	return (
		<View style={styles.root}>
			<Image
				source={Logo}
				style={[styles.logo, { height: height * 0.1 }]}
				resizeMode='contain'
			/>

			<CustomInput
				name='username'
				placeholder='Username'
				control={control}
				rules={{ required: 'Username is required' }}
			/>

			<CustomInput
				name='password'
				placeholder='Password'
				secureTextEntry
				control={control}
				rules={{
					required: 'Password is required',
					minLength: {
						value: 3,
						message: 'Password should be minimum 3 characters long',
					},
				}}
			/>

			<CustomButton
				text={loading ? 'Loading...' : 'Sign In'}
				onPress={handleSubmit(onSignInPressed)}
			/>

			<CustomButton
				text='Forgot password?'
				onPress={onForgotPasswordPressed}
				type='TERTIARY'
			/>

			<CustomButton
				text="Don't have an account? Create one"
				onPress={onSignUpPress}
				type='TERTIARY'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		padding: 20,
		backgroundColor: 'white',
	},
	logo: {
		width: '50%',
		maxWidth: 300,
		maxHeight: 200,
		marginVertical: 15,
	},
});

export default SignInScreen;
