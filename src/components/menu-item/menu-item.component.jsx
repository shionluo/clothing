import React from "react";

import { withRouter } from "react-router-dom";

//-- Style --//
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubTitle
} from "./menu-item.styles";

//------------------------------------------------  -----------------------------//
//-----------------------------------------------------------------------------//

const MenuItem = ({ title, imageUrl, linkUrl, size, history, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer imageUrl={imageUrl} />
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubTitle>SHOP NOW</ContentSubTitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
