import React from 'react';

var PeopleCardModule = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <div className="col-lg-4 col-md-6 col-sm-6 profile-card clearfix">
        <div className="profile-card__innerDiv clearfix">
          <div className="col-xs-4 profile-card__image">
            <img src={data.picture} alt className="img-responsive" />
          </div>
          <div className="col-xs-8 profile-card__text profile-card__name-container">
            <p className="profile-card__name">
              <a target="_blank" href={data.url}>{data.title}</a>
            </p>
            <p className="profile-card__description">
              {data.text}
            </p>
          </div>
        </div>
      </div>
    );
  }
});

export default PeopleCardModule;
