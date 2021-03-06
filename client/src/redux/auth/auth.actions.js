import AuthActionTypes from './auth.types'

export const signInStart = (emailAndPassword) => {
  return {
    type: AuthActionTypes.SIGN_IN_START,
    payload: emailAndPassword,
  }
}

export const signInSuccess = (userData) => ({
  type: AuthActionTypes.SIGN_IN_SUCCESS,
  payload: userData,
})

export const authFailure = (error) => ({
  type: AuthActionTypes.AUTH_FAILURE,
  payload: error,
})

export const signUpStart = (emailAndPassword) => {
  return {
    type: AuthActionTypes.SIGN_UP_START,
    payload: emailAndPassword,
  }
}

export const signUpSuccess = (userData) => ({
  type: AuthActionTypes.SIGN_UP_SUCCESS,
  payload: userData,
})

export const signOutStart = () => {
  return {
    type: AuthActionTypes.SIGN_OUT_START,
  }
}

export const signOutSuccess = () => ({
  type: AuthActionTypes.SIGN_OUT_SUCCESS,
})

export const toggleAuthLoading = () => ({
  type: AuthActionTypes.TOGGLE_AUTH_LOADING,
})

export const removeError = () => {
  return {
    type: AuthActionTypes.REMOVE_ERROR,
  }
}
