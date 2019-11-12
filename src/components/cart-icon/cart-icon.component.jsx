import "./cart-icon.component";
import "./cart-icon.styels.scss";

import { connect } from "react-redux";
// import { CartActionTypes } from "../cart-dropdown/cart-dropdown";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { ReactComponent as ShopingIcon } from "../../assets/11.2 shopping-bag.svg.svg";

import React from "react";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
