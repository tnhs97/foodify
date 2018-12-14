import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import foodReducer from '../reducers/food';
import FoodsPage from '../reducers/FoodsPage';
import FoodPage from '../reducers/FoodPage';
import {routerReducer} from 'react-router-redux';
import Basket from '../reducers/Basket';
import Categories from '../reducers/Categories';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(
        combineReducers({
            routing:routerReducer,
            food: foodReducer,
            FoodsPage: FoodsPage,
            FoodPage: FoodPage,
            Basket:Basket,
            Categories: Categories
        }),composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};