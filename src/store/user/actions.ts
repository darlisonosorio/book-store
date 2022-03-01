import User from '../../model/User';

enum ACTIONS {
  USER_LOGIN, USER_LOGOUT
}


const loginUser = (user: User) => ({
  type: ACTIONS.USER_LOGIN,
  user: user
});

const logoutUser = () => ({
  type: ACTIONS.USER_LOGOUT
});

export { loginUser, logoutUser, ACTIONS };