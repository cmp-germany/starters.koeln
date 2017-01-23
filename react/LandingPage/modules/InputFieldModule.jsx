import React from 'react';

var InputFieldModule = React.createClass({
  render: function () {

    var inputField;

    switch (this.props.data.inputType) {

      case "text":
      case "email":
      case "password":
        inputField = (
          <input type={this.props.data.inputType} className="form-control" placeholder={this.props.data.label} />
        )
        break;

      case "select":
        var options = this.props.data.options.map(function(option, index){ return (
          <option value={option} key={index}>{option}</option>
        );});
        inputField = (
          <select className="form-control">{options}</select>
        );
        break;

      default:
        console.error('Unknown inputType: "' + this.props.data.inputType + '". Data Property:', this.props.data);
    }

    return (
      <div className="form-group">
        {inputField}
      </div>
    );
  }
});

export default InputFieldModule;
