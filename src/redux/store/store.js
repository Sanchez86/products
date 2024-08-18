import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from '../reducers';
import { saveToLocalStorage } from '../../utils/localStorage';

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('appState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error('Could not load state', e);
    return undefined;
  }
};

const preloadedState = loadState();

const store = createStore(
  rootReducer,
  preloadedState, // Initialize store with the preloaded state
  composeEnhancers(applyMiddleware(thunk)),
);

// Save state to localStorage on each state change
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
