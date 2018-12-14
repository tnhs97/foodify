import {fetchFoods as fetchFoodsApi,
        loadMore as loadMoreApi,
        fetchFoodById as fetchFoodByIdApi,
        fetchCategories  as fetchCategoriesApi}  from '../api/fetchFoods';
import {getRenderedFoodsLength} from '../selectors/Foods';

export const fetchFoods = ()=>{
    
    return async (dispatch) => {
        try{
            dispatch({
                type: 'FETCH_FOOD_START'
            });
            const foods = await fetchFoodsApi();
            dispatch({
                type: 'FETCH_FOOD_SUCCESS',
                payload: foods
            });
        }catch(err){
            dispatch({
                type: 'FETCH_FOOD_FAIL',
                payload: err,
                error: true
            });
        };
    };
};

export const fetchCategories = ()=>{
    
    return async (dispatch,getState)=>{
        // console.log("Fetching entire state ", getState());
        try{
            dispatch({
                type: 'FETCH_CATEGORIES_START'
            });
            const categories = await fetchCategoriesApi();
            dispatch({
                type: 'FETCH_CATEGORIES_SUCCESS',
                payload: categories
            });
        }catch(err){
            dispatch({
                type: 'FETCH_CATEGORIES_FAILURE',
                payload: err,
                error: true
            });
        };
    };
}; 

export const loadMore = ()=>{
    
    return async (dispatch,getState) => {
        const offset = getRenderedFoodsLength(getState());
        try{
            dispatch({
                type: 'LOAD_MORE_START'
            });
            const foods = await loadMoreApi({offset});
            dispatch({
                type: 'LOAD_MORE_SUCCESS',
                payload: foods
            });
        }catch(err){
            dispatch({
                type: 'LOAD_MORE_FAILURE',
                payload: err,
                error: true
            });
        };
    };
};

export const fetchFoodById = id=>{
    return async (dispatch,getState) => {
        const offset = getRenderedFoodsLength(getState());
        try{
            dispatch({
                type: 'FETCH_FOOD_BY_ID_START'
            });
            const food = await fetchFoodByIdApi(id);
            dispatch({
                type: 'FETCH_FOOD_BY_ID_SUCCESS',
                payload: food
            });
        }catch(err){
            dispatch({
                type: 'FETCH_FOOD_BY_ID_FAILURE',
                payload: err,
                error: true
            });
        };
    };
};

export const addFoodToBasket = id => dispatch => {
    dispatch({
        type: 'ADD_FOOD_TO_BASKET',
        payload: id
    });
};

export const searchFood = text => dispatch =>{
    console.log("searching ", text);
    dispatch({
        type: 'SEARCH_FOOD',
        payload: text
    })};

export const removeFoodFromBasket = (id)=> async dispatch =>{
    dispatch({
        type: 'REMOVE_FOOD_FROM_BASKET',
        payload: id
    });
};   

export const cleanBasket = ()=>dispatch => {
    dispatch({
        type: 'CLEAN_BASKET'
    });
};

export const basketCheckout = (foods)=> () =>{
    alert(JSON.stringify(foods));
};