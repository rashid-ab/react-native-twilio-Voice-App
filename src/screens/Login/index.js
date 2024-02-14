import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik} from 'formik';
import {getColorTheme} from '../../theme/theme';
import {useSelector, useDispatch} from 'react-redux';
import * as yup from 'yup';
import {widthDP} from '../../components/Responsive';
import CopyRights from '../../components/copyRights';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {themes} from '../../store/slice/theme';
import {styles} from './styles';
import LoginLight from '../../../assets/loginlight.svg';
import LoginDark from '../../../assets/logindark.svg';
import {loginReq} from '../../store/slice/auth';
import NavigationService from '../../navigators/NavigationService';
const {height} = Dimensions.get('window');
const safeAreaHeight =
  Platform.OS === 'ios' ? height - SafeAreaView.top - SafeAreaView.bottom : 0;
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [view, setView] = useState(true);
  const theme = useSelector(state => state.theme.value);
  const auth = useSelector(state => state.auth);
  const colors = getColorTheme(theme);
  console.log('auth', auth);
  const loginValidation = yup.object().shape({
    email: yup
      .string()
      .email('Email must be a valid email')
      .required('Email is required')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Enter Valid Email',
      ),
    password: yup.string().trim().required('Password is required'),
  });
  const onSubmitLogin = values => {
    // return NavigationService.reset('App');
    dispatch(loginReq({email: values.email, password: values.password}));
  };
  useEffect(() => {
    console.log('agains');
    if (auth.user.token) {
      console.log('agains2');
      NavigationService.reset('App');
    }
  }, [auth.user.token]);
  return (
    <Formik
      initialValues={{email: 'haider@bracketsltd.email', password: '123'}}
      validateOnMount={true}
      validationSchema={loginValidation}
      onSubmit={values => onSubmitLogin(values)}>
      {({handleChange, handleSubmit, values, touched, errors}) => (
        <View style={styles.container}>
          <KeyboardAwareScrollView
            extraHeight={150}
            contentContainerStyle={[
              styles.container,
              {backgroundColor: colors.backgroundColor},
            ]}>
            <View style={{flex: 0.95}}>
              <View style={styles.logo}>
                {theme == 'light' ? <LoginLight /> : <LoginDark />}
                <Text style={[styles.loginText, {color: colors.labelColor}]}>
                  Login
                </Text>
              </View>
              <View style={styles.formContainer}>
                <View style={styles.formGroup}>
                  <Text style={[styles.label, {color: colors.labelColor}]}>
                    Login
                  </Text>
                  <View
                    style={[
                      styles.formTextInput,
                      {
                        borderWidth:
                          touched.password && errors.password ? 1 : 0,
                        borderColor:
                          touched.password && errors.password ? 'red' : '',
                      },
                    ]}>
                    <TextInput
                      placeholder="Email Address"
                      placeholderTextColor="#888"
                      style={[styles.textInput, {color: colors.inputTextColor}]}
                      value={values.email}
                      onChangeText={handleChange('email')}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.formikError}>{errors.email}</Text>
                  )}
                </View>
                <View style={styles.formGroup}>
                  <Text style={[styles.label, {color: colors.labelColor}]}>
                    Password
                  </Text>
                  <View
                    style={[
                      styles.formTextInput,
                      {
                        borderWidth:
                          touched.password && errors.password ? 1 : 0,
                        borderColor:
                          touched.password && errors.password ? 'red' : '',
                      },
                    ]}>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor="#888"
                      secureTextEntry={view}
                      style={[styles.textInput, {color: colors.inputTextColor}]}
                      value={values.password}
                      onChangeText={handleChange('password')}
                    />
                    <Feather
                      onPress={() => setView(!view)}
                      name={view ? 'eye' : 'eye-off'}
                      size={widthDP(30)}
                      color="grey"
                    />
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.formikError}>{errors.password}</Text>
                  )}
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={auth.isLoading}
                  style={[
                    styles.sumbitButton,
                    {backgroundColor: colors.themeColor},
                  ]}>
                  {auth.isLoading ? (
                    <ActivityIndicator size="small" color="white" />
                  ) : (
                    <Text style={[styles.label, {color: colors.commonColor}]}>
                      Login
                    </Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ChangePassword')}>
                  <Text
                    style={[
                      styles.forgetPasswordText,
                      {color: colors.copyRightColor},
                    ]}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.footer}>
              <CopyRights />
            </View>
          </KeyboardAwareScrollView>
        </View>
      )}
    </Formik>
  );
};

export default Login;
