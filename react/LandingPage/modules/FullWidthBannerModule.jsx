import React from 'react'
import typeMap from '../tools/typeMap';

var FullWidthBannerModule = React.createClass({
  render: function() {
    var data = this.props.data;

    var img = <img src={data.src} alt="full-width-banner" className="full-width-banner__img" />

    var href = data.href;
    if (href) {
      img = <a href={href} className="full-width-banner__a">{img}</a>;
    }
    return (
      <div className="full-width-banner">
        {img}
      </div>
    );
  }
});

typeMap.registerComponent("fullWidthBanner", FullWidthBannerModule);

export default FullWidthBannerModule;
