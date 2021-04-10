const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

export const getUser = () => ({
  type: GET_USER
})

export const setUser = () => ({
  type: SET_USER,
  user
})

const initial_state = {
  user: undefined
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user };
    default:
      return state;
  }
}