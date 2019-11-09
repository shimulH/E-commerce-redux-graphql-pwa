import React from "react";
import "./preview-collection.style.scss";
import ItemCollection from "../item-collection/item-collection.component";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {console.log(title)}
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <ItemCollection key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
