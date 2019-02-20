/* eslint global-require: 0 */
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducers';

const middlewares = [];
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
