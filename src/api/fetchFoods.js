import R from "ramda";
import request from "superagent";

export const fetchFoods = async () => {
  // return new Promise(resolve => {
  //   resolve(foods);
  // });

  const { body } = await request.get("http://localhost:3004/product");
  return body;
};

export const loadMore = async ({ offset }) => {
  const { body } = await request.get("http://localhost:3004/product");
  return body;
};

export const fetchFoodById = async id => {
  const { body } = await request.get("http://localhost:3004/product");
  const food = R.find(R.propEq("id", id), body);
  return food;
  // return new Promise((resolve, reject) => {
  //   console.log("Id in api fetchFoods ", id);
  //   const food = R.find(R.propEq("id", id), foods);
  //   resolve(food);
  // });
};

export const fetchCategories = async () => {
  // return new Promise(resolve => {
  //   resolve(mockCategories);
  // });
  const { body } = await request.get("http://localhost:3004/category");
  console.log(body);
  return body;
};
