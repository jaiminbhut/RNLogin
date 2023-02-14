import { Formik } from 'formik';
import React from 'react';
import {
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getVersion } from 'react-native-device-info';
import { useDispatch } from 'react-redux';
import { authorizeUser } from '../../actions/AuthActions';
import { Icons } from '../../assets';
import { CustomButton, CustomTextInput } from '../../components';
import { strings } from '../../lang';
import schema from '../../schema';
import { authorize } from '../../services/Login.service';
import { Layout } from '../../theme';
import {
  getAppVersionName,
  getDeviceModel,
  getDeviceName,
  getDeviceToken,
  getDeviceType,
  getDeviceUUID,
  getSystemVersion,
  isNull,
} from '../../utils/helper';
import styles from './Login.styles';
import useLogin from './hook/useLogin';

const FormContainer = ({}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.formContainer}>
      <View style={styles.viewAppLogo}>
        <Image source={Icons.app_logo} style={styles.imgAppLogo} />
      </View>
      <Formik
        enableReinitialize
        validationSchema={schema.login}
        initialValues={{
          url: 'user.techno.com',
          username: 'practical@gmail.com',
          password: 'user@123',
          isRemember: false,
          isAgree: true,
          error: '',
        }}
        onSubmit={(values, setFieldValue) => {
          Keyboard.dismiss();
          handleSubmit(values, setFieldValue, dispatch);
        }}>
        {({ ...params }) => <FormInputs params={params} />}
      </Formik>
    </View>
  );
};

const handleSubmit = async (values, setFieldValue, dispatch) => {
  const data = {
    username: values.username,
    password: values.password,
    url: values.url,
    multiple_user_login: {
      device_token: await getDeviceToken(),
      device_type: getDeviceType(),
      dedevicevice_model: getDeviceModel(),
      _version: getSystemVersion(),
      app_version: getAppVersionName(),
      device_name: await getDeviceName(),
      device_uid: await getDeviceUUID(),
    },
  };

  const response = await authorize(data);
  if (!isNull(response?.data?.Users)) {
    setFieldValue('error', '');
    dispatch(authorizeUser(response.data.Users));
  } else {
    setFieldValue('error', response.message);
  }
};

const FormInputs = ({ params }) => {
  const { values, setFieldValue, errors } = params;
  const dispatch = useDispatch();

  return (
    <View>
      <CustomTextInput
        value={values.url}
        onChangeText={(text) => handleTextChange(text, setFieldValue, 'url')}
        error={errors.url}
        leftIcon={Icons.link}
        keyboardType={'url'}
        placeholder={strings.url}
      />
      <CustomTextInput
        leftIcon={Icons.user}
        value={values.username}
        error={errors.username}
        keyboardType={'email-address'}
        onChangeText={(text) =>
          handleTextChange(text, setFieldValue, 'username')
        }
        placeholder={strings.username}
      />
      <CustomTextInput
        leftIcon={Icons.padlock}
        value={values.password}
        error={errors.password}
        onChangeText={(text) =>
          handleTextChange(text, setFieldValue, 'password')
        }
        placeholder={strings.password}
      />
      <View
        style={StyleSheet.flatten([
          Layout.rowHCenter,
          Layout.justifyContentBetween,
        ])}>
        <Pressable
          style={styles.checkView}
          onPress={() => setFieldValue('isRemember', !values.isAgree)}>
          <View style={[styles.outline, values.isRemember && styles.filled]} />
          <Text style={styles.textRememberMe}>{strings.rememberMe}</Text>
        </Pressable>
        <Text
          onPress={() => {}}
          style={StyleSheet.flatten([
            styles.textRememberMe,
            styles.textForgotPassword,
          ])}>
          {strings.forgotPassword}
        </Text>
      </View>
      <Pressable
        style={styles.checkView}
        onPress={() => setFieldValue('isAgree', !values.isAgree)}>
        <View style={[styles.outline, values.isAgree && styles.filled]} />
        <Text style={styles.textRememberMe}>
          {strings.iAcceptTermsCondition}
        </Text>
      </Pressable>
      {!isNull(values.error) && (
        <Text style={styles.alertText}>{values.error}</Text>
      )}
      <CustomButton
        disabled={!values.isAgree || !isNull(errors)}
        title={strings.signIn}
        customStyle={styles.btnSignIn}
        onPress={() => handleSubmit(values, setFieldValue, dispatch)}
      />
      <Text style={styles.textPrivacyPolicy}>
        {strings.privacyPolicy}
        <Text style={styles.textAnd}> and </Text>
        {strings.privacyPolicy}
      </Text>
    </View>
  );
};

const handleTextChange = (text, setFieldValue, fieldKey) => {
  setFieldValue(fieldKey, text);
};

export function Login() {
  const { getter, setter } = useLogin();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.backgroundContainer} />
        <FormContainer getter={getter} setter={setter} />
      </ScrollView>
      <Text style={styles.textVersion}>{`Version ${getVersion()}`}</Text>
    </View>
  );
}
