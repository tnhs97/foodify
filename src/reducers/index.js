import { combineReducers } from "redux";
import foodReducer from "../reducers/food";
import FoodsPage from "../reducers/FoodsPage";
import FoodPage from "../reducers/FoodPage";
import { routerReducer } from "react-router-redux";
import Basket from "../reducers/Basket";
import Categories from "../reducers/Categories";

const rootReducer = combineReducers({
  routing: routerReducer,
  food: foodReducer,
  FoodsPage: FoodsPage,
  FoodPage: FoodPage,
  Basket: Basket,
  Categories: Categories
});

export default rootReducer;
