import React from 'react';

var SlideStatement = React.createClass({
  render: function() {

    var data = this.props.data;

    return (
      <section
        className="slide slide--with-background slide--statement"
        style={{
          backgroundImage: "url("+data.background.src+")",
          backgroundPositionX: data.background.positionX,
          backgroundPositionY: data.background.positionY
        }}
      >
        <div className="slide--with-background__inner-div" style={{minHeight: 700}}>
          <div className="container">
            <div className="row">
              <div className="col-sm-8 slide__statement">
                <h1><span className="slide__white-negative-text">{data.title}</span></h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

export default SlideStatement;
