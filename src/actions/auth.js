import { firebase, googleAuthProvider, anonymousLogin } from '../firebase/firebase';

export const login = (uid, displayName) => ({
  type: 'LOGIN',
  uid,
  displayName
});

export const startLogin = () => {
  return (dispatch) => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
      const uid = result.uid;
      const displayName = result.displayName
      dispatch(login(uid, displayName))
    })
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const startAnonLogin = () => {
  return (dispatch) => {
    return firebase.auth().signInAnonymously().then((result) => {
      return firebase.auth().onAuthStateChanged((user) => {
        const uid = user.uid;
        const displayName = user.isAnonymous;
        dispatch(login(uid, displayName))
      })
      
    })
  };
};
