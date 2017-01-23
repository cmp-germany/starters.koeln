import React            from 'react';
import InputFieldModule from './InputFieldModule';

var InputFieldsList = React.createClass({

  render: function () {

    var inputFields = this.props.fields.map(function (field, index) {
      return (<InputFieldModule data={field} key={index} />);
    });

    return (
      <div>
        {inputFields}
      </div>
    );
  }
});

export default InputFieldsList;
