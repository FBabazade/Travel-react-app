import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({path,label,src,text}) => {
  return (
    <>
      <li className="cards_item">
        <Link to={path} className="cards_item_link">
            <figure data-category={label} className="cards_item_pic-wrap">
                <img src={src} alt="tavel images" className="cards_item_img" />
            </figure>
                <div className="cards_item_info">
                    <h5 className="cards_item_text">{text}</h5>
                </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
