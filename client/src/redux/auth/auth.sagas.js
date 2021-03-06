import { takeLatest, put, all, call } from 'redux-saga/effects'

import AuthActionTypes from './auth.types'
import { signInRequest, signOutRequest, signUpRequest } from '../../api/api'
import {
  authFailure,
  signInSuccess,
  signOutSuccess,
  toggleAuthLoading,
} from './auth.actions'
import { push } from 'connected-react-router'

// export function* getSnapshotFromUserAuth(userAuth) {
//   try {
//     const userRef = yield call(createUserProfileDocument, userAuth);
//     const userSnapshot = yield userRef.get();
//     yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
//   } catch (error) {
//     yield put(signInFailure(error));
//   }
// }

export function* signIn({ payload: { email, password } }) {
  yield put(toggleAuthLoading())
  const response = yield call(signInRequest, [email, password])
  if (response.status !== 400) {
    yield put(signInSuccess(response))
    yield put(toggleAuthLoading())
    yield put(push('/'))
  } else {
    yield put(authFailure(response.data))
    yield put(toggleAuthLoading())
  }
}

// export function* isUserAuthenticated() {
//   try {
//     const userAuth = yield getCurrentUser()
//     if (!userAuth) return
//     yield getSnapshotFromUserAuth(userAuth)
//   } catch (error) {
//     yield put(signInFailure(error))
//   }
// }

export function* signOut() {
  try {
    yield signOutRequest()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(authFailure(error))
  }
}

export function* signUp({ payload: { name, email, password } }) {
  yield put(toggleAuthLoading())
  const response = yield call(signUpRequest, [name, email, password])
  if (response.status !== 400) {
    yield put(toggleAuthLoading())

    yield put(push('/sign-in'))
  } else {
    yield put(authFailure(response.data))
    yield put(toggleAuthLoading())
  }
}

// export function* onCheckUserSession() {
//   yield takeLatest(AuthActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
// }

export function* onSignOutStart() {
  yield takeLatest(AuthActionTypes.SIGN_OUT_START, signOut)
}
export function* onSignInStart() {
  yield takeLatest(AuthActionTypes.SIGN_IN_START, signIn)
}

export function* onSignUpStart() {
  yield takeLatest(AuthActionTypes.SIGN_UP_START, signUp)
}

export function* authSagas() {
  yield all([call(onSignInStart), call(onSignOutStart), call(onSignUpStart)])
}
