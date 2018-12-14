import R from "ramda";
import request from "superagent";

export const fetchFoods = async () => {
  return new Promise(resolve => {
    resolve(foods);
  });

  const { body } = await request.get(
    "https://raw.githubusercontent.com/amituuush/gomocha/master/dummy-data.json"
  );
  return body.shops.menu.items;
};

export const loadMore = async ({ offset }) => {
  return new Promise(resolve => {
    resolve(foods);
  });
};

export const fetchFoodById = async id => {
  return new Promise((resolve, reject) => {
    console.log("Id in api fetchFoods ", id);
    const food = R.find(R.propEq("id", id), foods);
    resolve(food);
  });
};

export const fetchCategories = async () => {
  return new Promise(resolve => {
    resolve(mockCategories);
  });
};
