/* eslint global-require: 0 */
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducers';

const middlewares = [
	promiseMiddleware,
];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

export default function configureStore(initialState) {
	const store = createStore(reducer, initialState, enhancer);
	if (module.hot) {
		module.hot.accept(() => {
			store.replaceReducer(require('./reducers').default);
		});
	}
	return store;
}
