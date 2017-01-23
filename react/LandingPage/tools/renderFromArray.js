import React from 'react';
import typeMap from './typeMap';

var renderFromArray = function(array, typeIdentifier = "type"){
  return array.map(function(element, index){
    return React.createElement(
      typeMap.getComponent(element[typeIdentifier]),
      {data: element, key: index},
      null
    );
  });
};

export default renderFromArray;
