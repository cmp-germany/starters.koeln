import React from 'react';

var RegisterCardModule = React.createClass({
  render: function() {
    var data = this.props.data;

    return (
      <div className="col-lg-4 col-md-6 col-sm-6 register-card clearfix"><div className="register-card__innerDiv clearfix">
          <div style={{textAlign: 'center'}}>
            <p className="register-card__text">{data.text}</p>
            <a href={data.url} className="btn btn-primary">
              <span className="glyphicon glyphicon-menu-right" aria-hidden="true" />{data.buttonText}
            </a>
          </div>
        </div>
      </div>
    );
  }
});

export default RegisterCardModule;
