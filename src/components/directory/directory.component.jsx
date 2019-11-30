import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

//-- Components --//
import MenuItem from "../menu-item/menu-item.component";

//-- Selectors --//
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

//-- Style --//
import { DirectoryContainer } from "./directory.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherSecitonProps }) => (
        <MenuItem key={id} {...otherSecitonProps} />
      ))}
    </DirectoryContainer>
  );
};

export default connect(mapStateToProps)(Directory);
