import { BLE } from '../actions/ActionTypes';


const initialState = {
  peripheral: null,
  characteristic: null,
  bpm: 0,
}

export default function ble(state = initialState, action) {
  switch (action.type) {
    case BLE.SET_CHARACTERISTIC: {
      return {
        ...state,
        characteristic: action.payload.characteristic
      }
    }
    case BLE.SET_PERIPHERAL: {
      return {
        ...state,
        peripheral: action.payload.peripheral
      }
    }

    case BLE.SET_BPM: {
      return {
        ...state,
        bpm: action.payload.bpm
      }
    }
    default: {
      return state
    }
  }
}
