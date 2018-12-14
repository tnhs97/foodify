import React from "react";
import { connect } from "react-redux";
import {
  getTotalBasketPrice,
  getBasketFoodsWithCount
} from "../selectors/Foods";
import R from "ramda";
import {
  removeFoodFromBasket,
  cleanBasket,
  basketCheckout
} from "../actions/Foods";
import { Link } from "react-router";

const Basket = ({
  foods,
  totalPrice,
  removeFoodFromBasket,
  cleanBasket,
  basketCheckout
}) => {
  // console.log(foods);
  // console.log(totalPrice);
  const isBasketEmpty = R.isEmpty(foods);
  const renderContent = () => {
    return (
      <div>
        {isBasketEmpty && <div> Your shopping cart is empty </div>}
        <div className="table-responsive">
          <table className="table-bordered table-striped table-condensed cf">
            <tbody>
              {foods.map((food, index) => (
                <tr key={index} className="item-checout">
                  <td className="first-column-checkout">
                    <img
                      className="img-thumbnail"
                      src={food.image}
                      alt={food.name}
                    />
                  </td>
                  <td>{food.name}</td>
                  <td>${food.price}</td>
                  <td>{food.count}</td>
                  <td>
                    <span
                      className="delete-cart"
                      onClick={() => removeFoodFromBasket(food.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {R.not(isBasketEmpty) && (
          <div className="row">
            <div className="pull-right total-user-checkout">
              <b>Total:</b>${totalPrice}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div>
        <Link className="btn btn-info" to="/">
          <span className="glyphicon glyphicon-info-sign" />
          <span> Continue Shopping</span>
        </Link>
        {R.not(isBasketEmpty) && (
          <div>
            <button className="btn btn-danger" onClick={() => cleanBasket()}>
              <span className="glyphicon glyphicon-trash" />
              Clean Cart
            </button>
            <button
              className="btn btn-success"
              onClick={() => basketCheckout(foods)}
            >
              <span className="glyphicon glyphicon-envelope" />
              Checkout
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{renderContent()}</div>
          <div className="col-md-3 btn-user-checkout">{renderSidebar()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  foods: getBasketFoodsWithCount(state),
  totalPrice: getTotalBasketPrice(state)
});

const mapDispatchToProps = dispatch => ({
  removeFoodFromBasket: id => dispatch(removeFoodFromBasket(id)),
  cleanBasket: () => dispatch(cleanBasket()),
  basketCheckout: foods => dispatch(basketCheckout(foods))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
