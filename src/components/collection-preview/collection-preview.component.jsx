import React from "react";

import { withRouter } from "react-router-dom";

//-- Components --//
import CollectionItem from "../collection-item/collection-item.component";

//-- Style --/
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./collection-preview.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const CollectionPreview = ({ title, routeName, items, history, match }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
