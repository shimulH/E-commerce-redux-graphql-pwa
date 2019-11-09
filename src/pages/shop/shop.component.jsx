import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

export class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otheCollectionProps }) => (
          <PreviewCollection key={id} {...otheCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
