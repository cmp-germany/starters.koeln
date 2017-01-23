import React from 'react';

var KeyFeatureModule = React.createClass({
  render: function () {
    var data = this.props.data;

    var icon;
    if (data.icon) {
      icon = <i className="material-icons key-feature__icon text-center">{data.icon}</i>;
    }
    if (data.picture) {
      icon = <img src={data.picture} className="key-feature__icon text-center"/>;
    }

    return (
      <div className={"col-md-5 key-feature clearfix " + this.props.additionalClasses}>
        <div className="col-xs-2">
          {icon}
        </div>
        <div className="col-xs-10">
          <h3 className="key-feature__headline">
            {data.title}
          </h3>
          <p className="key-feature__description" dangerouslySetInnerHTML={{__html: data.text}} />
          <a href={data.button.url} target={data.button.target ? data.button.target : null} className="btn btn-primary">{data.button.text}</a>
        </div>
      </div>
    );
  }
})

export default KeyFeatureModule;
