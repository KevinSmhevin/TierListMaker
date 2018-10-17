import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startGetAllTierList, startGetAllUserTierList } from './actions/tierList'
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';


// import { createTierList, setCreateTierList, updateTierList, startUpdateTierList, setRemoveTierList } from './actions/tierList';
// import { setTextFilter } from './actions/filters';
// import getVisibleTierLists from './selectors/tierLists'

const store = configureStore();

// temporary content ********

//  store.dispatch(setCreateTierList({ title: 'League', description: 'champions', numberOfCompetition: 1, competitorList: {} }))

// store.dispatch(setTextFilter('Le'))

// const visibleTierLists = getVisibleTierLists(state.tierList, state.filters);

// console.log(visibleTierLists)

//  end of temporary content
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid, user.displayName));
    store.dispatch(startGetAllUserTierList())
    store.dispatch(startGetAllTierList()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    store.dispatch(startGetAllUserTierList())
    store.dispatch(startGetAllTierList()).then(() => {
      renderApp();
      history.push('/');
    })
  }
});
