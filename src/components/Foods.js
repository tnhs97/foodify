import React from "react";
import { connect } from "react-redux";
import { fetchFoods, fetchCategories } from "../actions/Foods";
import { getFoods } from "../selectors/Foods";
import { Link } from "react-router";
import R from "ramda";
import { loadMore, addFoodToBasket } from "../actions/Foods";

class Foods extends React.Component {
  componentDidMount() {
    this.props.fetchFoods();
    this.props.fetchCategories();
  }

  renderFood = (food, index) => {
    const { addFoodToBasket } = this.props;
    const shortDesc = `${R.take(60, food.description)}...`;
    return (
      <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
        <div className="thumbnail">
          <Link to={`./Foods/${food.id}`}>
            <img className="img-thumbnail" src={food.image} alt={food.name} />
          </Link>
        </div>
        <div className="caption">
          <h4 className="pull-right">${food.price}</h4>
          <h4>
            <Link to={`./Foods/${food.id}`}>{food.name}</Link>
          </h4>
          <p> {shortDesc}</p>
          <p className="itemButton">
            <button
              className="btn btn-primary"
              onClick={() => addFoodToBasket(food.id)}
            >
              Add To Basket
            </button>
            <Link to={`/Foods/${food.id}`} className="btn btn-default">
              Detail
            </Link>
          </p>
        </div>
      </div>
    );
  };

  render() {
    const { foods, loadMore } = this.props;
    return (
      <div>
        <div className="books row">
          {foods.map((food, index) => {
            return this.renderFood(food, index);
          })}
        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="pull-right btn btn-default" onClick={loadMore}>
              Load More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchFoods: () => dispatch(fetchFoods()),
  loadMore: () => dispatch(loadMore()),
  addFoodToBasket: id => dispatch(addFoodToBasket(id)),
  fetchCategories: () => dispatch(fetchCategories())
});
//ownProps are available here because this component is defined directly on route.
//child componenets must include compose withRoutes
const mapStateToProps = (state, ownProps) => ({
  foods: getFoods(state, ownProps)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Foods);
