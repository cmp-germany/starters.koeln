import React   from 'react';
import typeMap from '../tools/typeMap';

var SloganModule = React.createClass({
  render: function() {
    return (
      <div className="ac-slogan">
        <p className="ac-slogan__p">{this.props.data.text}</p>
      </div>
    );
  }
});

typeMap.registerComponent('slogan', SloganModule);

export default SloganModule;
