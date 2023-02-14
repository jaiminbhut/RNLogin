import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Icons } from '../../assets';
import { strings } from '../../lang';
import { getUser } from '../../selectors/auth';
import { Layout } from '../../theme';
import styles from './UserDetails.styles';

const Header = ({}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewHeader}>
      <TouchableOpacity
        style={styles.viewBack}
        onPress={() => navigation.goBack()}>
        <Image source={Icons.back} style={styles.imageBack} />
      </TouchableOpacity>
      <Text style={styles.textProfile}>{strings.myProfile}</Text>
      <View style={styles.viewBack} />
    </View>
  );
};

const UserData = ({ title, value, rightIcon }) => {
  return (
    <View style={styles.viewUserData}>
      <View style={[Layout.fill]}>
        <Text style={styles.textUserDataTitle}>{title}</Text>
        <Text style={styles.textUserDataValue}>{value}</Text>
      </View>
      <View style={styles.viewRightIcon}>
        <Image source={rightIcon} style={styles.imgRightIcon} />
      </View>
    </View>
  );
};

export function UserDetails() {
  const user = useSelector(getUser);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.viewCurv}>
        <Image style={styles.imgCurv} source={Icons.curv} />
      </View>
      <View>
        <View style={styles.viewUser}>
          <Image source={Icons.user} style={styles.imgUser} />
          <View style={styles.viewCamera}>
            <Image source={Icons.camera} style={styles.imgCamera} />
          </View>
        </View>
        <Text style={styles.textName}>{'James Bouncher'}</Text>
        <Text style={styles.textEmail}>{'JamesJBoucher@jourrapide.com'}</Text>
        <UserData
          rightIcon={Icons.locationPin}
          title={strings.address}
          value={'2850 Raul Wallenberg Place New London. CT 06320'}
        />
        <UserData
          rightIcon={Icons.call}
          title={strings.contact}
          value={'203-814-5307'}
        />
      </View>
    </View>
  );
}
