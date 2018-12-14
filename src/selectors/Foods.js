import R from "ramda";

export const getFoodsById = (state, id) => R.prop(id, state.food);

export const getFoods = (state, ownProps) => {
  // const foods = R.map(id=>getFoodsById(state,id),state.FoodsPage.ids);
  // return foods;

  const activeCategoryId = getActiveCategoryId(ownProps);
  // console.log("activeCategoryId " , activeCategoryId);
  const applyCategory = item => {
    // console.log("Item ", item);
    return R.equals(activeCategoryId, R.prop("categoryId", item));
  };
  const applySearch = item => {
    return R.contains(
      state.FoodsPage.search.toLowerCase(),
      R.prop("name", item).toLowerCase()
    );
  };
  const foods = R.compose(
    R.filter(applySearch),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map(id => getFoodsById(state, id))
  )(state.FoodsPage.ids);
  return foods;
};

export const getRenderedFoodsLength = state => R.length(state.FoodsPage.ids);

export const getTotalBasketPrice = state => {
  const foods = R.map(id => getFoodsById(state, id), state.Basket);
  // console.log("Foods are " , foods);
  let total = 0;
  return foods.reduce((total, food) => {
    return total + food.price;
  }, total);
  // console.log("Food total is ", phnTotal);
};

export const getTotalBasketCount = state => {
  return state.Basket.length;
};

export const getCategories = state => {
  // console.log(" fething categories from state " ,R.values(state.Categories));
  return R.values(state.Categories);
};

export const getActiveCategoryId = ownProps => {
  // console.log("ownProps " , ownProps);
  return R.path(["params", "id"], ownProps);
};

export const getBasketFoodsWithCount = state => {
  const uniqueIds = R.uniq(state.Basket);

  const foodCount = id => {
    return R.compose(
      R.length,
      R.filter(basketId => R.equals(id, basketId))
    )(state.Basket);
  };
  const foodWithCount = food => {
    return R.assoc("count", foodCount(food.id), food);
  };
  const foods = R.compose(
    R.map(foodWithCount),
    R.map(id => getFoodsById(state, id))
  )(uniqueIds);
  console.log("Foods in basket are ", foods);
  return foods;
};
