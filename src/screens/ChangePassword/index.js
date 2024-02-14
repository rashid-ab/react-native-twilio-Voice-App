import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik } from 'formik';
import { getColorTheme } from '../../theme/theme';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { widthDP } from '../../components/Responsive';
import CopyRights from '../../components/copyRights';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './styles';
import ChangepasswordLight from '../../../assets/changepasswordlight.svg'
import ChangepasswordDark from '../../../assets/changepassworddark.svg'
const ChangePassword = () => {
  const dispatch = useDispatch();
  const [view, setView] = useState(true)
  const [viewNewPassword, setViewNewPassword] = useState(true)
  const [viewConfirmPassword, setViewConfirmPassword] = useState(true)
  const theme = useSelector(state => state.theme.value);
  const colors = getColorTheme(theme);
  const loginValidation = yup.object().shape({

    password: yup.string().trim().required('Password is required'),
    newPassword: yup.string().trim().required('New Password is required'),
    confirmPassword: yup.string().trim().required('Confirm Password is required'),
  });
  const onSubmitLogin = (values) => {

  }
  return (
    <Formik
      initialValues={{ confirmPassword: '', password: '', newPassword: '' }}
      validateOnMount={true}
      validationSchema={loginValidation}
      onSubmit={values => onSubmitLogin(values)}>
      {({ handleChange, handleSubmit, values, touched, errors }) => (
        <View style={styles.container}>
          <KeyboardAwareScrollView
            extraHeight={150}
            contentContainerStyle={[
              styles.container,
              { backgroundColor: colors.backgroundColor },
            ]}>
            <View style={{ flex: .95 }}>
              <View style={styles.logo}>
                {theme == 'light' ?
                  <ChangepasswordLight /> :
                  <ChangepasswordDark />
                }
                <Text style={[styles.loginText, { color: colors.labelColor }]}>
                  Change Password
                </Text>

              </View>
              <View style={styles.formContainer}>
                <View style={styles.formGroup}>
                  <Text style={[styles.label, { color: colors.labelColor }]}>
                    Current Password
                  </Text>
                  <View style={[styles.formTextInput, { borderWidth: (touched.password && errors.password) ? 1 : 0, borderColor: (touched.password && errors.password) ? 'red' : '' }]}>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor="#888"
                      secureTextEntry={view}
                      style={[styles.textInput, { color: colors.inputTextColor }]}
                      value={values.password}
                      onChangeText={handleChange('password')}
                    />
                    <Feather
                      onPress={() => setView(!view)}
                      name={view ? "eye" : "eye-off"}
                      size={widthDP(30)}
                      color="grey"
                    />
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.formikError}>{errors.password}</Text>
                  )}
                </View>
                <View style={styles.formGroup}>
                  <Text style={[styles.label, { color: colors.labelColor }]}>
                    New Password
                  </Text>
                  <View style={[styles.formTextInput, { borderWidth: (touched.newPassword && errors.newPassword) ? 1 : 0, borderColor: (touched.newPassword && errors.newPassword) ? 'red' : '' }]}>
                    <TextInput
                      placeholder="New Password"
                      placeholderTextColor="#888"
                      secureTextEntry={view}
                      style={[styles.textInput, { color: colors.inputTextColor }]}
                      value={values.newPassword}
                      onChangeText={handleChange('newPassword')}
                    />
                    <Feather
                      onPress={() => setViewNewPassword(!viewNewPassword)}
                      name={viewNewPassword ? "eye" : "eye-off"}
                      size={widthDP(30)}
                      color="grey"
                    />
                  </View>
                  {touched.newPassword && errors.newPassword && (
                    <Text style={styles.formikError}>{errors.newPassword}</Text>
                  )}
                </View>
                <View style={styles.formGroup}>
                  <Text style={[styles.label, { color: colors.labelColor }]}>
                    Confirm Password
                  </Text>
                  <View style={[styles.formTextInput, { borderWidth: (touched.confirmPassword && errors.confirmPassword) ? 1 : 0, borderColor: (touched.confirmPassword && errors.confirmPassword) ? 'red' : '' }]}>
                    <TextInput
                      placeholder="Re-Type Password"
                      placeholderTextColor="#888"
                      secureTextEntry={viewConfirmPassword}
                      style={[styles.textInput, { color: colors.inputTextColor }]}
                      value={values.confirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                    />
                    <Feather
                      onPress={() => setViewConfirmPassword(!viewConfirmPassword)}
                      name={viewConfirmPassword ? "eye" : "eye-off"}
                      size={widthDP(30)}
                      color="grey"
                    />
                  </View>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={styles.formikError}>{errors.confirmPassword}</Text>
                  )}
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={[
                    styles.sumbitButton,
                    { backgroundColor: colors.themeColor },
                  ]}>
                  <Text style={[styles.label, { color: colors.commonColor }]}>
                    Login
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

export default ChangePassword;











