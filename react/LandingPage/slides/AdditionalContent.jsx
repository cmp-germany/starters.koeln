import React                 from 'react';
import renderFromArray       from '../tools/renderFromArray';
import FullWidthBannerModule from '../modules/FullWidthBannerModule';
import NavbarModule          from '../modules/NavbarModule';
import SloganModule          from '../modules/SloganModule';
import MarkdownModule        from '../modules/MarkdownModule';

var AdditionalContent = React.createClass({
  render: function() {
    var data = this.props.data;

    var header = renderFromArray(data.header);

    var main = data.main;
    var leftColumn = renderFromArray(main.leftColumn);
    var mainColumn = renderFromArray(main.mainColumn);
    var rightColumn = renderFromArray(main.rightColumn);

    var footer = renderFromArray(data.footer);
    return (
      <section className="slide slide--additional-content">
        <div className="container">
          <div className="row">
            <div className="ac-header">
              {header}
            </div>
          </div>
          <div className="row">
            <div className="ac-main">
              <div className="col-md-4">{leftColumn}</div>
              <div className="col-md-8">{mainColumn}</div>
              <div className="col-md-4">{rightColumn}</div>
            </div>
          </div>
          <div className="row">
            <div className="ac-footer">{footer}</div>
          </div>
        </div>
      </section>
    );
  }
});

export default AdditionalContent;
