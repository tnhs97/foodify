import React from "react";
import { connect } from "react-redux";
import { fetchFoodById, addFoodToBasket } from "../actions/Foods";
import { getFoodsById } from "../selectors/Foods";
import R from "ramda";
import BasketCart from "./BasketCart";
import { Link } from "react-router";

class Food extends React.Component {
  componentDidMount = () => this.props.fetchFoodById(this.props.params.id);

  renderFields = () => {
    const { food } = this.props;
    const columnFields = R.compose(
      R.toPairs,
      R.pick([
        "cpu",
        "camera",
        "size",
        "weight",
        "display",
        "battery",
        "memory"
      ])
    )(food);
    // console.log("columnFields ", columnFields);
    return columnFields.map(([key, value]) => {
      return (
        <div className="column" key={key}>
          <div className="ab-details-title">
            <p> {key} </p>
          </div>
          <div className="ab-details-info">
            <p> {value} </p>
          </div>
        </div>
      );
    });
  };

  renderContent = () => {
    const { food } = this.props;
    return (
      <div>
        <div className="thumbnail">
          <div className="col-md-6">
            <img className="img-thumbnail" src={food.image} alt={food.name} />
          </div>
          <div className="col-md-6">{this.renderFields()}</div>
        </div>
        <div className="caption-full">
          <h4 className="pull-right">${food.price}</h4>
          <h4>{food.name}</h4>
          <p>{food.description}</p>
        </div>
      </div>
    );
  };

  renderSideBar = () => {
    const { food, addFoodToBasket } = this.props;
    return (
      <div>
        <div>
          <p className="lead">Quick Shop</p>
          <BasketCart />
          <div className="form-group">
            <h1>{food.name}</h1>
            <h2>{food.price}</h2>
          </div>
        </div>
        <Link to="/" className="btn btn-info btn-block">
          Back to Store
        </Link>
        <button
          type="button"
          className="btn btn-success btn-block"
          onClick={() => addFoodToBasket(food.id)}
        >
          Add To Cart
        </button>
      </div>
    );
  };

  render() {
    // console.log(this.props.food);
    const { food } = this.props;
    return (
      <div className="view-container">
        <div className="container">
          <div className="col-md-9">{food && this.renderContent()}</div>
          <div className="col-md-3">{food && this.renderSideBar()}</div>
        </div>
      </div>
    );
  }
}

// export default Food;
const mapDispatchtoProps = dispatch => ({
  fetchFoodById: id => {
    dispatch(fetchFoodById(id));
  },
  addFoodToBasket: id => {
    dispatch(addFoodToBasket(id));
  }
});

const mapStateToProps = state => ({
  food: getFoodsById(state, state.FoodPage.id)
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Food);
