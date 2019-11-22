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
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large"
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large"
    }
  ];

  return (
    <div className="directory">
      {sections.map(section => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
