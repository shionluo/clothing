import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

//-- Components --//
import MenuItem from "../menu-item/menu-item";

//-- Selectors --//
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

//-- Style --//
import "./directory.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

const Directory = ({ sections }) => {
  return (
    <div className="directory">
      {sections.map(({ id, ...otherSecitonProps }) => (
        <MenuItem key={id} {...otherSecitonProps} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Directory);
