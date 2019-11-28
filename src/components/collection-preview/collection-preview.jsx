import React from "react";

//-- Components --//
import CollectionItem from "../collection-item/collection-item";

//-- Style --/
import "./collection-preview.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const CollectionPreview = ({ title, items, ...otherProps }) => {
  console.log(otherProps);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
