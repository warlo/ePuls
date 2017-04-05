function generateStatuses(name) {
  return {
    'BEGIN': `${name}.BEGIN`,
    'SUCCESS': `${name}.SUCCESS`,
    'FAILURE': `${name}.FAILURE`
  };
}

export const Statistics = {
  FETCH: generateStatuses('Statistics.FETCH'),
  SET_CHARACTERISTIC: generateStatuses('Statisitcs.SET_CHARACTERISTIC')
}

export const BLE = {
  SET_CHARACTERISTIC: 'BLE.SET_CHARACTERISTIC',
  SET_PERIPHERAL: 'BLE.SET_PERIPHERAL',
  SET_BPM: 'BLE.SET_BPM'
}
