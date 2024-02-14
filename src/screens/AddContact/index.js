import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  View,
} from 'react-native';
import { Formik } from 'formik';
import { getColorTheme } from '../../theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { heightDP, widthDP } from '../../components/Responsive';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { styles } from './styles';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { loginReq } from '../../store/slice/auth';
const AddContact = () => {
  const [avatar, setAvatar] = useState(true);
  const [profileImage, setProfileImage] = useState('');
  const theme = useSelector(state => state.theme.value);
  const colors = getColorTheme(theme);
  const dispatch = useDispatch()
  const loginValidation = yup.object().shape({
    firstname: yup.string().trim().required('First Name is required'),
    lastname: yup.string().trim().required('Last Name is required'),
    email: yup
      .string()
      .email('Email must be a valid email')
      .required('Email is required')
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Enter Valid Email',
      ),
    address: yup.string().trim().required('Address is required'),
    website: yup.string().trim().required('Website is required'),
    phonenumber: yup.number()
      .required('Number is required')
      .min(13, 'Should be atleast 13 Numbers!'),
    company: yup.string().trim().required('Company is required'),
  });
  const onSubmit = values => {
    alert(values.firstname);
  };
  const launchCameras = async () => {
    let options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 600,
      maxWidth: 800,
    };
    let result = '';
    const grant = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    console.log('result.assets', grant)
    if (Platform.OS == 'android') {
      if (grant == PermissionsAndroid.RESULTS.GRANTED) {
        result = await launchCamera(options);
      }
    } else {

      result = await launchCamera(options);
    }
    console.log('result.assets', result.assets)
    setProfileImage(result.assets[0]);
  };
  const launchImageLibrarys = async () => {
    // dispatch(loginReq({email:"rashidbuttuog@gmail.com",password:"00Aa00786"}))
    // return;
    let options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
      // maxHeight: 600,
      // maxWidth: 800,
    };
    const result = await launchImageLibrary(options);
    if (!result.didCancel) {
      setProfileImage(result.assets[0]);
    }
  };
  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        phonenumber: '',
        address: '',
        email: '',
        website: '',
        company: '',
      }}
      validateOnMount={true}
      validationSchema={loginValidation}
      onSubmit={values => onSubmit(values)}>
      {({ handleChange, handleSubmit, values, touched, errors }) => (
        <View
          style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
          <KeyboardAwareScrollView
            extraHeight={150}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ backgroundColor: colors.backgroundColor }}>
            <Text style={[styles.loginText, { color: colors.labelColor }]}>
              Add New Contact
            </Text>
            <View style={styles.formContainer}>
              <TouchableOpacity
                onPress={launchImageLibrarys}
                style={{
                  backgroundColor: colors.commonTextInputColor,
                  borderRadius: 2,
                  height: verticalScale(150),
                }}>
                <View style={styles.avatarContainer}>
                  {profileImage ? (
                    <Image height={verticalScale(150)} width={'100%'} style={{resizeMode:'contain'  }} source={{ uri: profileImage.uri }} />
                  ) : (
                    <Image source={require('../../../assets/avatar.png')} />
                  )}
                </View>
                {!profileImage ? (
                  <View style={styles.cameraView}>
                    <Entypo
                      name={'camera'}
                      size={widthDP(30)}
                      color="#DCDBDF"
                    />
                  </View>
                ) : (
                  <></>
                )}
              </TouchableOpacity>
              <View style={[styles.formGroup, { marginTop: 10 }]}>
                <View style={styles.iconView}>
                  <FontAwesome5 name={'user'} size={widthDP(20)} color="grey" />
                </View>
                <View>
                  <View
                    style={[
                      styles.formTextInput,
                      {
                        borderWidth:
                          touched.firstname && errors.firstname ? 1 : 0,
                        borderColor:
                          touched.firstname && errors.firstname ? 'red' : '',
                      },
                    ]}>
                    <TextInput
                      placeholder="First Name"
                      placeholderTextColor="#888"
                      style={[styles.textInput, { color: colors.inputTextColor }]}
                      value={values.firstname}
                      onChangeText={handleChange('firstname')}
                    />
                  </View>
                  {touched.firstname && errors.firstname && (
                    <Text style={styles.formikError}>{errors.firstname}</Text>
                  )}
                </View>
              </View>

              <View style={styles.formGroup}>
                <View style={styles.iconView}></View>
                <View>
                  <View
                    style={[
                      styles.formTextInput,
                      {
                        borderWidth:
                          touched.lastname && errors.lastname ? 1 : 0,
                        borderColor:
                          touched.lastname && errors.lastname ? 'red' : '',
                      },
                    ]}>
                    <TextInput
                      placeholder="Last Name"
                      placeholderTextColor="#888"
                      style={[styles.textInput, { color: colors.inputTextColor }]}
                      value={values.lastname}
                      onChangeText={handleChange('lastname')}
                    />
                  </View>
                  {touched.lastname && errors.lastname && (
                    <Text style={styles.formikError}>{errors.lastname}</Text>
                  )}
                </View>
              </View>
              <View style={styles.formGroup}>
                <View style={styles.iconView}>
                  <Zocial name={'call'} size={widthDP(20)} color="grey" />
                </View>
                <View>
                  <View
                    style={[
                      styles.formTextInput,
                      {
                        borderWidth:
                          touched.phonenumber && errors.phonenumber ? 1 : 0,
                        borderColor:
                          touched.phonenumber && errors.phonenumber
                            ? 'red'
                            : '',
                      },
                    ]}>
                    <TextInput
                      placeholder="Phone Number"
                      placeholderTextColor="#888"
                      style={[styles.textInput, { color: colors.inputTextColor }]}
                      value={values.phonenumber}
                      keyboardType='numeric'
                      onChangeText={handleChange('phonenumber')}
                    />
                  </View>
                  {touched.phonenumber && errors.phonenumber && (
                    <Text style={styles.formikError}>{errors.phonenumber}</Text>
                  )}
                </View>
              </View>
              <View style={styles.formGroup}>
                <View style={styles.iconView}>
                  <MaterialCommunityIcons
                    name={'email'}
                    size={widthDP(20)}
                    color="grey"
                  />
                </View>
                <View>
                  <View
                    style={[
                      styles.formTextInput,
                      {
                        borderWidth: touched.email && errors.email ? 1 : 0,
                        borderColor: touched.email && errors.email ? 'red' : '',
                      },
                    ]}>
                    <TextInput
                      placeholder="Email Address"
                      placeholderTextColor="#888"
                      style={[styles.textInput, { color: colors.inputTextColor }]}
                      value={values.email}
                      onChangeText={handleChange('email')}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.formikError}>{errors.email}</Text>
                  )}
                </View>
              </View>
              <View style={styles.formGroup}>
                <View style={styles.iconView}>
                  <FontAwesome5
                    name={'building'}
                    size={widthDP(20)}
                    color="grey"
                  />
                </View>
                <View>
                  <View
                    style={[
                      styles.formTextInput,
                      {
                        borderWidth: touched.company && errors.company ? 1 : 0,
                        borderColor:
                          touched.company && errors.company ? 'red' : '',
                      },
                    ]}>
                    <TextInput
                      placeholder="Company"
                      placeholderTextColor="#888"
                      style={[styles.textInput, { color: colors.inputTextColor }]}
                      value={values.company}
                      onChangeText={handleChange('company')}
                    />
                  </View>
                  {touched.company && errors.company && (
                    <Text style={styles.formikError}>{errors.company}</Text>
                  )}
                </View>
              </View>
              <View style={styles.formGroup}>
                <View style={styles.iconView}>
                  <MaterialCommunityIcons
                    name={'web'}
                    size={widthDP(20)}
                    color="grey"
                  />
                </View>
                <View>
                  <View
                    style={[
                      styles.formTextInput,
                      {
                        borderWidth: touched.website && errors.website ? 1 : 0,
                        borderColor:
                          touched.website && errors.website ? 'red' : '',
                      },
                    ]}>
                    <TextInput
                      placeholder="Website"
                      placeholderTextColor="#888"
                      style={[styles.textInput, { color: colors.inputTextColor }]}
                      value={values.website}
                      onChangeText={handleChange('website')}
                    />
                  </View>
                  {touched.website && errors.website && (
                    <Text style={styles.formikError}>{errors.website}</Text>
                  )}
                </View>
              </View>
              <View style={styles.formGroup}>
                <View style={styles.iconView}>
                  <Feather name={'map-pin'} size={widthDP(20)} color="grey" />
                </View>
                <View>
                  <View
                    style={[
                      styles.formTextInput,
                      {
                        borderWidth: touched.address && errors.address ? 1 : 0,
                        borderColor:
                          touched.address && errors.address ? 'red' : '',
                      },
                    ]}>
                    <TextInput
                      placeholder="Address"
                      placeholderTextColor="#888"
                      style={[styles.textInput, { color: colors.inputTextColor }]}
                      value={values.address}
                      onChangeText={handleChange('address')}
                    />
                  </View>
                  {touched.address && errors.address && (
                    <Text style={styles.formikError}>{errors.address}</Text>
                  )}
                </View>
              </View>
              <TouchableOpacity
                onPress={handleSubmit}
                style={[
                  styles.sumbitButton,
                  { backgroundColor: colors.themeColor },
                ]}>
                <Text style={[styles.label, { color: colors.commonColor }]}>
                  Add Contact
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      )}
    </Formik>
  );
};

export default AddContact;
