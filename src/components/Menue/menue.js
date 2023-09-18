import React from "react";
import items from "./items";
import MenuItem from "./ItemBox";
import './menue.css'

export default function Menu() {
    return (
      <div className="menu-container">
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    );
  }
  
 