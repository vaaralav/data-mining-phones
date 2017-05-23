// @flow
import fonoapi from 'fonoapi-nodejs';
import uniqBy from 'lodash/uniqBy';
import type {PhoneSearch} from './config';
import * as util from './fonoapi-utils';

function getDeviceData(device: PhoneSearch): Promise<any> {
  return new Promise((resolve, reject) => {
    fonoapi.getDevices((query, data) => {
      if (data && data.status === 'error') {
        console.log('foobar', fonoapi.token);
        const error = Object.assign({}, data, {token: JSON.stringify(fonoapi.token)});
        throw new Error(JSON.stringify(error, null, 2));
      }
      resolve(data);
    }, device.device, device.brand)
  });
}


export default async function getPhoneData(phonesToSearch: Array<PhoneSearch>, token: string) {
  fonoapi.token = token;
  const results = await Promise.all(phonesToSearch.map((search) => getDeviceData(search)));

  const processedResults = uniqBy(results.map((devices) => 
    devices.map((device) => {
      const {
        DeviceName = '',
        gprs = 'No',
        edge = 'No',
        wlan = 'No',
        weight = '',
        size = '',
        resolution = '',
        cpu = '',
        os = '',
      } = device;

      const cleanDevice = {
        DeviceName,
        gprs: util.parseYesNo(gprs),
        edge: util.parseYesNo(edge),
        wlan: util.parseYesNo(wlan),
        weight: util.parseWithUnit(weight),
        size: util.parseWithUnit(size),
        resolution: util.parseResolution(resolution),
        cpu_speed: util.parseSpeed(cpu),
        cpu_cores: util.parseCores(cpu),
        ios: util.parseIOS(os),
        android: util.parseAndroid(os),
        windows_phone: util.parseWindowsPhone(os)
      };
      
      return cleanDevice;
    })).reduce((devices, someDevices) => [...devices, ...someDevices], []), (device) => device.DeviceName
  );

  return processedResults;
}