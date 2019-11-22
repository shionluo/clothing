import React from "react";

//-- Components --//
import MenuItem from "../Menu-Item/menu-item";

//-- Style --//
import "./directory.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const Directory = () => {
  const sections = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      linkUrl: "hats"
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      linkUrl: "jackets"
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkUrl: "sneakers"
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      linkUrl: "womens",
      size: "large"
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      linkUrl: "mens",
      size: "large"
    }
  ];

  return (
    <div className="directory">
      {sections.map(({ id, ...otherSecitonProps }) => (
        <MenuItem key={id} {...otherSecitonProps} />
      ))}
    </div>
  );
};

export default Directory;
