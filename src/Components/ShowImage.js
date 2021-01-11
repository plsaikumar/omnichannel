import React from "react";

const ShowImage = ({ item, url }) => (
        <img
            src={`http://localhost:8000/api/${url}/photo/${item._id}`}
            alt={item.name}
            className="w-100"
            style={{borderRadius:"16px"}}
        />
);

export default ShowImage;