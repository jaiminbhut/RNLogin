import R from 'ramda';
import DeviceInfo from 'react-native-device-info';

export function isNull(data) {
  if (R.isNil(data) || R.isEmpty(data)) {
    return true;
  } else {
    false;
  }
}

export function getAppVersionName() {
  return DeviceInfo.getVersion();
}

export async function getDeviceToken() {
  const token = await DeviceInfo.getDeviceToken();
  return token;
}

export function getDeviceType() {
  return DeviceInfo.getSystemName();
}

export async function getDeviceName() {
  const deviceName = await DeviceInfo.getDeviceName();
  return deviceName;
}

export function getDeviceModel() {
  return DeviceInfo.getModel();
}

export function getSystemVersion() {
  return DeviceInfo.getSystemVersion();
}

export async function getDeviceUUID() {
  const uuid = await DeviceInfo.getUniqueId();
  return uuid;
}
