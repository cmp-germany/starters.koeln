import React                 from 'react';
import ReactDOM              from 'react-dom';
import TitleWithRegisterForm from './slides/TitleWithRegisterForm';
import KeyFeatures           from './slides/KeyFeatures';
import SlideStatement        from './slides/SlideStatement';
import People                from './slides/People';
import AdditionalContent     from './slides/AdditionalContent';

var LandingPageApp = React.createClass({
  render: function() {

    var modules = this.props.data.map(function (module, index) {
      switch (module.module) {

        case "TitleWithRegisterForm":
          return (<TitleWithRegisterForm data={module} key={index} />);

        case "KeyFeatures":
          return (<KeyFeatures data={module} key={index} />);

        case "SlideStatement":
          return (<SlideStatement data={module} key={index} />);

        case "People":
          return (<People data={module} key={index} />);

        case "AdditionalContent":
          return (<AdditionalContent data={module} key={index} />);


        default:
          console.error('Unknown module "' + module.module + '". Data: ');
          console.error(module);
      }
    });

    return (
      <div>
        {modules}
      </div>
    );
  }
});

ReactDOM.render(
  <LandingPageApp data={contentLandingPage} />,
  document.getElementById('react-app-landing-page')
);
