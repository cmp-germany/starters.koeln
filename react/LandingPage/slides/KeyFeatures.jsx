import React            from 'react';
import KeyFeatureModule from '../modules/KeyFeatureModule';

var KeyFeatures = React.createClass({
  render: function () {
    var data = this.props.data;

    var rows = [];

    for (var i = 0; i < data.features.length; i=i+2) {
      rows.push(
        <div className="row" key={i} >
          <KeyFeatureModule data={data.features[i]} additionalClasses="col-md-offset-1" />
          <KeyFeatureModule data={data.features[i+1]} />
        </div>
      );
    }

    return (
      <section className="slide slide--key-features">
        <div className="container">
          {rows}
        </div>
      </section>
    );
  }
});

export default KeyFeatures;
