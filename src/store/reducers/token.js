const INITAL_STATE = {
  token: '',
};

export default function token(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TOKEN':
      return action.token;
    default:
      return state;
  }
}
