import React from 'react';
import typeMap from '../tools/typeMap';

var NavbarModule = React.createClass({
  render: function() {
    var data = this.props.data;
    var lis = data.elements.map(function(element, index){
      return (
        <li key={index} className="ac-navbar__li">
          <a href={element.href} className="ac-navbar__a">{element.text}</a>
        </li>
      );
    })
    return (
      <div className="ac-navbar">
        <ul className="ac-navbar__ul">
          {lis}
        </ul>
      </div>
    );
  }
});

typeMap.registerComponent('navbar', NavbarModule);

export default NavbarModule;
