import { BLE } from './ActionTypes';


export function setCharacteristic(characteristic) {
  return {
    type: BLE.SET_CHARACTERISTIC,
    payload: {
      characteristic
    }
  }
}

export function setPeripheral(peripheral) {
  return {
    type: BLE.SET_PERIPHERAL,
    payload: {
      peripheral
    }
  }
}

export function setBPM(bpm) {
  return {
    type: BLE.SET_BPM,
    payload: {
      bpm
    }
  }
}
