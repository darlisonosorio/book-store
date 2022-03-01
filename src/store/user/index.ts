import { Action } from '@reduxjs/toolkit';
import User from '../../model/User'
import { ACTIONS } from './actions'

const USER_KEY = "USER_KEY";

function getFromLocalStorage(): User {
  const fromStorage = localStorage.getItem(USER_KEY);
  return (fromStorage != null)
    ? JSON.parse(fromStorage) as User
    : new User();
}

function saveToLocalStorage(user: User)  {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

const INITIAL_STATE = getFromLocalStorage();

export default function UserReducer(state: User = INITIAL_STATE,
                                    action: any): User {
  if (action.type === ACTIONS.USER_LOGIN) {
    const toSave = { 
      ...state,   
      username: action.user.username,
      password: action.user.password,
      keepConnection: action.user.keepConnection
    } as User;
    saveToLocalStorage(toSave);
    return toSave;
  }
  if (action.type === ACTIONS.USER_LOGOUT) {
    const toSave = {
      ...state,
      username: '',
      password: '',
      keepConnection: false
    } as User;
    saveToLocalStorage(toSave);
    return toSave;
  }
  return state;
}