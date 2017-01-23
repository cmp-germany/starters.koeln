import React from 'react';
import typeMap from '../tools/typeMap';

var MarkdownModule = React.createClass({
  render: function() {
    return (
      <div />
    );
  }
});

typeMap.registerComponent('markdown', MarkdownModule);

export default MarkdownModule;
