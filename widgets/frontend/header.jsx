import React from 'react';

const Header = (props) => (
  <h4 onClick={props.onClick} className="header">{props.title}</h4>
);

export default Header;
