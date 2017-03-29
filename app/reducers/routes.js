import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {},
};

const routes = (state = initialState, action) => {

  switch (action.type) {
    case ActionConst.FOCUS: {
      console.log('reducer', state, action);
      return Object.assign({}, state, {
        ...state,
        scene: action.scene,
      });
    }
    case ActionConst.JUMP: {
      if (action.user) {
        return {
          ...state,
          user: action.user
        }
      }
    }
    default:
      return state;
  }
};

export default routes;
