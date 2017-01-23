import React from 'react';

var IfNotNullModule = React.createClass({
  render: function () {

    var isWrap = false;

    // Check, if Container should be rendered
    if(Array.isArray(this.props.check)) {
      for (var i = 0; i < this.props.check.length; i++) {
        if(!this.props.check[i]) return null;
      }
    } else if (!this.props.check) {
      return null;
    }

    // Check, if content needs to be wrapped
    if (React.Children.count(this.props.children) > 1) {
      isWrap = true;
    }

    if(!isWrap) {
      return this.props.children;
    }

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

export default IfNotNullModule;
