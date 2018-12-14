import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { getTotalBasketCount, getTotalBasketPrice } from "../selectors/Foods";

export const BasketCart = props => {
  // console.log("Props passed are ", props);
  const { totalBasketCount, totalPrice } = props;
  let str = <span>{totalBasketCount} item(s) - {totalPrice}$</span>;
  if ((totalBasketCount == 0)) {
    str = "";
  }
  return (
    <div className="cart">
      <div className="dropdown">
        <Link
          to="/basket"
          id="dLabel"
          className="btn btn-inverse btn-block btn-large"
        >
          <i className="fa fa-fa-shopping-cart" />
          {str}
        </Link>
      </div>
    </div>
  );
};

// export default BasketCart;

const mapStateToProps = state => ({
  totalBasketCount: getTotalBasketCount(state),
  totalPrice: getTotalBasketPrice(state)
});

export default connect(mapStateToProps)(BasketCart);
