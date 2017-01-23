import React           from 'react';
import IfNotNullModule from '../modules/IfNotNullModule';
import InputFieldsList from '../modules/InputFieldsList';

var TitleWithRegisterForm = React.createClass({
  render: function() {

    // save the data in own variable for easier access
    var data = this.props.data;


    return (
      <section
        className="slide slide--with-background slide--title"
        style={{
          backgroundImage: 'url('+data.pictures.background.src+')',
          backgroundAttachment: 'scroll',
          backgroundPositionX: data.pictures.background.positionX,
          backgroundPositionY: data.pictures.background.positionY,

        }}>
        <div className="slide--with-background__inner-div">
          <div className="container">
            <div className="row">
              <div className="col-md-5 slide__title-introduction">
                <h1><span className="slide__white-negative-text">{data.contents.title}</span></h1>
                <div className="slide--with-background__text">
                  <p>{data.contents.text}</p>
                </div>
                <IfNotNullModule check={[data.pictures.motiv.src] }>
                  <img src={data.pictures.motiv.src} alt="motiv" className="slide__motiv-picture" />
                </IfNotNullModule>
              </div>
              <div className="col-md-5 col-md-offset-2">
                <form id="register-form" className="register-form register-form--slide">
                  <p className="register-form__intro-text text-center">{data.contents.formTitle}</p>

                  <InputFieldsList fields={data.inputFields} />

                  <p className="register-form__info-text">{data.contents.buttonAdditionalText}</p>
                  <button type="submit" className="btn btn-primary btn-block">{data.contents.buttonText}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

export default TitleWithRegisterForm;
